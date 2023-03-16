import { Timestamp } from 'firebase/firestore'
import { atom } from 'jotai'

export interface Community {
  id: string
  creatorId: string
  numberOfMembers: number
  privacyType: 'public' | 'restricted' | 'private'
  createdAt?: Timestamp
  imageURL?: string
}

export interface Snippet {
    communityId: string,
    isModerator?: boolean
}
interface CommunityState {
    mySnippets: Snippet[]
}

export const communityStateAtom = atom<CommunityState>({
    mySnippets: []
})
