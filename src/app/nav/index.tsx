import { HStack, Image } from '@chakra-ui/react'
import SearchInput from './SearchInput'
import AuthButtons from './AuthButtons'

const Navbar = () => {
  return (
    <HStack px={5} bg="white" py={2} h={12}>
      <Image
        src="/images/logo.svg"
        w={8}
        h={8}
        display={{
          md: 'none'
        }}
      />

      <Image
        w="100px"
        src="/images/reddit-1.svg"
        display={{
          base: 'none',
          md: 'unset'
        }}
      />
      <SearchInput />
      <AuthButtons />
      </HStack>
  )
}

export default Navbar
