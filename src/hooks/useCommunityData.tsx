/* this custom hook is used to */
import { authModalAtom } from '@/atoms/authModalAtom'
import { Community, communityStateAtom, Snippet } from '@/atoms/communitiesAtom'
import { auth, db } from '@/firebase'
import {
  collection,
  doc,
  getDocs,
  increment,
  writeBatch
} from 'firebase/firestore'
import { useAtom, useSetAtom } from 'jotai'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

// communities user joined, this should in state
//
//
const useCommunityData = () => {
  // set communities user joined to state
  const [communityState, setCommunityState] = useAtom(communityStateAtom)
  const setAuthModal = useSetAtom(authModalAtom)
  const [loading, setLoading] = useState(false)

  const [user] = useAuthState(auth)

  const onJoinOrLeaveCommunity = async (
    isJoined: boolean,
    communityData: Community
  ) => {
    // if user is not logged, open the login modal
    if (!user) {
      setAuthModal({ view: 'login', open: true })
      return
    }
    if (isJoined) {
      await leaveCommunity(communityData.id)
    } else {
      await joinCommmunity(communityData)
    }
  }

  // update the user and communities
  // https://firebase.google.com/docs/firestore/manage-data/transactions
  const leaveCommunity = async (communityId: string) => {
    setLoading(true)

    try {
      const batch = writeBatch(db)
      batch.delete(
        doc(db, `users/${user?.uid}/communitySnippets/${communityId}`)
      )
      batch.update(doc(db, `communities/${communityId}`), {
        numberOfNumbers: increment(-1)
      })

      await batch.commit()
    } catch (err: any) {
      console.log('leave Community', err.message)
    }
    setLoading(false)

    // need update state again...
    setCommunityState(prev => ({
      ...prev,
      mySnippets: prev.mySnippets.filter(
        snippet => snippet.communityId !== communityId
      )
    }))
  }

  const joinCommmunity = async (communityData: Community) => {
    setLoading(true)

    try {
      const batch = writeBatch(db)

      const newSnippet = {
        communityId: communityData.id,
        imageURL: communityData.imageURL || ''
      }

      batch.set(
        doc(db, `users/${user?.uid}/communitySnippets/${communityData.id}`),
        newSnippet
      )

      batch.update(doc(db, `communities/${communityData.id}`), {
        numberOfNumbers: increment(1)
      })

      await batch.commit()

      // update state
      setCommunityState(prev => ({
        ...prev,
        mySnippets: prev.mySnippets.concat(newSnippet)
      }))
    } catch (err: any) {
      console.log('joinCommunity', err.message)
    }
    setLoading(false)
  }

  const getSnippets = async () => {
    setLoading(true)

    try {
      const snippetDocs = await getDocs(
        collection(db, `users/${user?.uid}/communitySnippets`)
      )

      setCommunityState(prev => ({
        ...prev,
        mySnippets: snippetDocs.docs.map(doc => doc.data()) as Snippet[]
      }))
    } catch (err: any) {
      // Do something
      console.log('getSnippets', err.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (!user) return
    getSnippets()
  }, [user])

  // not working, loading will always be true
  /* useEffect(() => {
   *   if (!user) return
   *     setLoading(true)
   *     const unsubscribe = onSnapshot(
   *     collection(db, `users/${user.uid}/communitySnippets`),
   *     snapshot => {
   *       const snippetDocs = snapshot.docs
   *       setCommunityState(prev => ({
   *         ...prev,
   *         mySnippets: snippetDocs.map(doc => doc.data()) as Snippet[]
   *       }))
   *     }
   *   )
   *   return () => {
   *     setLoading(false)
   *     unsubscribe()
   *   }
   * }, [user]) */

  /* setCommunityState(prev => ({
   *     ...prev,
   *     mySnippets: snippetsDocs
   * })) */

  return {
    onJoinOrLeaveCommunity,
    communityState,
    loading
  }
}

export default useCommunityData
