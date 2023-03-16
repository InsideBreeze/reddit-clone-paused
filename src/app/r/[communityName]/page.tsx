import { Community } from '@/atoms/communitiesAtom'
import { db } from '@/firebase'
import { doc, getDoc, Timestamp } from 'firebase/firestore'
import { notFound } from 'next/navigation'
import { useRouter } from 'next/router'
import Header from './header'
const CommunityPage = async ({
  params
}: {
  params: { communityName: string }
}) => {
  // because components in the app are all server rendering, so I think fetch remote data can directly in there
  console.log('parmas', params)

  const communityDoc = await getDoc(
    doc(db, `communities/${params.communityName}`)
  )
  const communityDocData = communityDoc.data()

  if (!communityDoc.exists()) {
    notFound()
  }
  const communityData = JSON.parse(
    JSON.stringify({
      id: communityDoc.id,
      ...communityDocData,
      createdAt: communityDocData?.createdAt?.toJSON() as Timestamp
    })
  )

  return (
    <>
      <Header communityData={communityData as Community} />
    </>
  )
}
export default CommunityPage
