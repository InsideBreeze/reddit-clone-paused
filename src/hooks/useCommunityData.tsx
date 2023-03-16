/* this custom hook is used to */
import { Community, communityStateAtom, Snippet } from "@/atoms/communitiesAtom"
import { auth, db } from "@/firebase"
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"

// communities user joined, this should in state
//
//
const useCommunityData = () => {

    // set communities user joined to state
    const [communityState, setCommunityState] = useAtom(communityStateAtom)
    const [loading, setLoading] = useState(false)

    const [user] = useAuthState(auth)


    // I am not sure it is okay...
    useEffect(() => {
        if (!user) return
        setLoading(true)
        const unsubscribe =  onSnapshot(collection(db, `users/${user.uid}/communitySnippets`), snapshot => {
        const snippetDocs = snapshot.docs
        setCommunityState(prev => ({
            ...prev,
            mySnippets: snippetDocs.map(doc => doc.data()) as Snippet[]
        }))

        })
        return () => {
            setLoading(false)
            unsubscribe()
        }
    }, [user])

        /* setCommunityState(prev => ({
*     ...prev,
*     mySnippets: snippetsDocs
* })) */

    return {
        communityState,
        loading
    }
}

export default useCommunityData
