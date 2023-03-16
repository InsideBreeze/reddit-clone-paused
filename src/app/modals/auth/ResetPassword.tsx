import { authModalAtom } from '@/atoms/authModalAtom'
import { auth } from '@/firebase'
import {
  VStack,
  Text,
  Input,
  Button,
  Flex,
  Center,
  Image,
  HStack,
  Icon
} from '@chakra-ui/react'
import { useSetAtom } from 'jotai'
import { useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth'
import { BsDot } from 'react-icons/bs'

const ResetPassword = () => {
  const setAuthModalState = useSetAtom(authModalAtom)
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)

  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth)

  const onResetPassword = async () => {
    const result = await sendPasswordResetEmail(email)
    if (result) {
      setSuccess(true)
    }
  }
  return (
    <Center w="full" p="16px 8px">
      <VStack w="280px">
        <Image src="/images/logo.svg" alt="reddit-logo" h={12} />
        <Text textAlign="center" fontWeight={700}>
          Reset your password
        </Text>

        {success ? (
          <Text>Check your email :)</Text>
        ) : (
          <>
            <Text textAlign="center" fontSize="sm">
              Enter the email associated with your account and we will send you
              a reset link
            </Text>
            <Input
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Button
              w="full"
              fontWeight={500}
              onClick={onResetPassword}
              isLoading={sending}
            >
              Reset Password
            </Button>
          </>
        )}

        <HStack spacing="2px" color="blue.500" fontWeight={600}>
          <Text
            cursor="pointer"
            onClick={() => setAuthModalState({ view: 'login', open: true })}
          >
            LOGIN
          </Text>
          <Icon as={BsDot} />
          <Text
            cursor="pointer"
            onClick={() => setAuthModalState({ view: 'signUp', open: true })}
          >
            SIGNUP
          </Text>
        </HStack>
      </VStack>
    </Center>
  )
}

export default ResetPassword
