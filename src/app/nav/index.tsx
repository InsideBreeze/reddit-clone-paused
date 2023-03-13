import {
    Center,
  HStack,
  Image,
  Icon,
  Text,
  Menu,
  MenuButton,
  Flex,
    Box
} from '@chakra-ui/react'
import SearchInput from './SearchInput'
import RightContent from './RightContent'
import { AiFillHome } from 'react-icons/ai'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '@/firebase'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const [user] = useAuthState(auth)
  return (
        <>
            <HStack px={2} bg="white" py={2} h={12} justifyContent={{ lg: 'space-between' }}>
                <HStack spacing={0}>
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
                    {user && (
                        <Center>
                            <Menu>
                                <MenuButton>
                                    <Flex align="center">
                                        <HStack>
                                            <Icon as={AiFillHome} fontSize={20} />
                                            <Text fontWeight={500} mr={{ md: 8 }} display={{ base: 'none', lg: 'unset' }}>Home</Text>
                                        </HStack>
                                        <Icon as={ChevronDownIcon} ml="auto" />
                                    </Flex>
                                </MenuButton>
                            </Menu>
                        </Center>
                    )}

                </HStack>

                <Flex flexGrow={{ sm: '1', lg: 'unset' }}>
                    <SearchInput user={user} />
                </Flex>
                <RightContent user={user} />
                {/* <AuthButtons /> */}
            </HStack>
        </>
    )
}

export default Navbar
