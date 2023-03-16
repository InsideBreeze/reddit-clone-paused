import { HStack, Image } from '@chakra-ui/react'
import SearchInput from './SearchInput'
import RightContent from './RightContent'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase'
import Directory from './Directory'

const Navbar = () => {
  const [user] = useAuthState(auth)
  return (
    <>
      <HStack
        px={2}
        bg="white"
        py={2}
        h={12}
        justifyContent={{ md: 'space-between' }}
      >
        <HStack>
          <Image
            src="/images/logo.svg"
            w={7}
            h={7}
            display={{
              md: 'none'
            }}
          />

          <Image
            w="80px"
            src="/images/reddit-1.svg"
            display={{
              base: 'none',
              md: 'unset'
            }}
          />
          {user && <Directory />}
        </HStack>
        <SearchInput user={user} />
        <RightContent user={user} />
        {/* <AuthButtons /> */}
      </HStack>
    </>
  )
}

export default Navbar
