import { auth } from '@/firebase'
import { HStack, Text, VStack, Image } from '@chakra-ui/react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
const OAuthButtons = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
  return (
    <VStack w="full">
      <HStack
        spacing={2.5}
        p={1.5}
        borderRadius="full"
        bg="white"
        w="full"
        justify="center"
        border="1px solid"
        borderColor="gray.300"
        _hover={{ bg: 'gray.50' }}
        cursor="pointer"
        onClick={() => signInWithGoogle()}
      >
        <Image src="/images/Google_LOGO.svg" alt="" h={6} />
        <Text fontWeight={600}>Continue with Google</Text>
      </HStack>
      <HStack
        spacing={2.5}
        p={1.5}
        borderRadius="full"
        bg="white"
        w="full"
        justify="center"
        border="1px solid"
        borderColor="gray.300"
        _hover={{ bg: 'gray.50' }}
        cursor="pointer"
      >
        <Text fontWeight={600}>Some other providers</Text>
      </HStack>
    </VStack>
  )
}

export default OAuthButtons
