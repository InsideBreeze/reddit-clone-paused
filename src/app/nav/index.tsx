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
            <HStack px={2} bg="white" py={2} h={12} justifyContent={{ md: 'space-between'}}>
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
                    {user && (
                        <Center mr={2}>
                            <Menu>
                                <MenuButton mr={2} ml={{base:0, lg: 2}}>
                                    <Flex align="center" justify="space-between" width={{base: 'auto', lg: '150px'}}>
                                        <HStack>
                                            <Icon as={AiFillHome} fontSize={20} />
                                            <Text fontWeight={500} display={{ base: 'none', lg: 'flex' }}>Home</Text>
                                        </HStack>
                                        <Icon as={ChevronDownIcon} fontSize={20}/>
                                    </Flex>
                                </MenuButton>
                            </Menu>
                        </Center>
                    )}
                </HStack>
                <SearchInput user={user} />


                <RightContent user={user} />
                {/* <AuthButtons /> */}
            </HStack>
        </>
    )
}

export default Navbar
