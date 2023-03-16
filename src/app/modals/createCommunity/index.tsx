import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Divider,
  Text,
  Input,
  Checkbox,
  Icon,
  HStack,
  VStack
} from '@chakra-ui/react'
import { BsEyeFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLockClosed } from 'react-icons/hi'
import { useState } from 'react'
import {
  addDoc,
  doc,
  runTransaction,
  serverTimestamp,
  setDoc
} from 'firebase/firestore'
import { auth, db } from '@/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
interface Props {
  open: boolean
  onClose: () => void
}

type PrivacyType = 'public' | 'restricted' | 'private'
const CreateCommunityModal = ({ open, onClose }: Props) => {
  const [communityName, setCommunityName] = useState('')
  const [privacyType, setPrivacyType] = useState<PrivacyType>('public')
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')
  const [user] = useAuthState(auth)

  const remainingCount = 21 - communityName.length

  const onInputCommunityName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 21) {
      return
    }
    setCommunityName(e.target.value)
  }

  const onSelectPrivacyType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyType(e.target.name as PrivacyType)
  }

  const onCreateCommunity = async () => {
    if (error) {
      setError('')
    }
    // check the name only contains alphatic letters

    // create Community
    // a community data contains numbersOfMember and communityName
    try {
      if (!/^[a-zA-Z]+_?[a-zA-Z]+$/.test(communityName)) {
        throw new Error('community name can only contain letters and _')
      }

      setLoading(true)
      const docRef = doc(db, 'communities', communityName)

      await runTransaction(db, async transation => {
        const communityDoc = await transation.get(docRef)
        if (communityDoc.exists()) {
          throw new Error(
            `/r/${communityName} is already taken, try another one`
          )
        }

        transation.set(docRef, {
          creatorId: user?.uid,
          createdAt: serverTimestamp(),
          privacyType,
          numberOfNumbers: 1
        })
      })
    } catch (err: any) {
      // Do something
      setError(err.message)
    }
    setLoading(false)
  }
  return (
    <>
      <Modal isOpen={open} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a community</ModalHeader>
          <ModalCloseButton />
          <Divider orientation="horizontal" />
          <ModalBody>
            <Text fontWeight={600}>Name</Text>
            <Text fontSize="sm" color="gray.600">
              Community names including capitalization cannot be changed
            </Text>
            <Text
              fontSize={20}
              pos="relative"
              top="31px"
              pl={2}
              color="gray.500"
            >
              r/
            </Text>
            <Input
              pl={6}
              h="35px"
              onChange={onInputCommunityName}
              value={communityName}
            />
            <Text fontSize="sm" color={remainingCount === 0 ? 'red' : ''}>
              {remainingCount} characters remaining
            </Text>
            <Text fontSize="sm" color="red">
              {error}
            </Text>

            <VStack align="start" mt={4}>
              <Text fontWeight={600}>Community Type</Text>
              <Checkbox
                onChange={onSelectPrivacyType}
                name="public"
                isChecked={privacyType === 'public'}
              >
                <HStack color="gray.600">
                  <Icon as={BsFillPersonFill} fontSize={16} />
                  <Text fontSize={14}>Public</Text>
                  <Text fontSize={12}>
                    Anyone can view, post, and comment to this community
                  </Text>
                </HStack>
              </Checkbox>
              <Checkbox
                isChecked={privacyType === 'restricted'}
                onChange={onSelectPrivacyType}
                name="restricted"
              >
                <HStack color="gray.600">
                  <Icon as={BsEyeFill} fontSize={16} />
                  <Text fontSize={14}>Restricted</Text>
                  <Text fontSize={12}>
                    Anyone can view, post, and comment to this community
                  </Text>
                </HStack>
              </Checkbox>
              <Checkbox
                isChecked={privacyType === 'private'}
                onChange={onSelectPrivacyType}
                name="private"
              >
                <HStack color="gray.600">
                  <Icon as={HiLockClosed} fontSize={16} />
                  <Text fontSize={14}>Private</Text>
                  <Text fontSize={12}>
                    Only approved users can view and submit to this community
                  </Text>
                </HStack>
              </Checkbox>
            </VStack>
          </ModalBody>

          <ModalFooter bg="gray.100" borderRadius="0px 0px 10px 10px" mt={5}>
            <Button variant="outline" h="30px" onClick={onClose} mr={2}>
              Cancle
            </Button>
            <Button
              variant="solid"
              h="30px"
              onClick={onCreateCommunity}
              isLoading={loading}
            >
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateCommunityModal
