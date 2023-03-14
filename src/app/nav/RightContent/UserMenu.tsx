import { HStack, Icon, VStack, Text, Flex, Box, Center } from '@chakra-ui/react'
import { FaRedditSquare } from 'react-icons/fa'
import { IoSparkles } from 'react-icons/io5'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'

const UserMenu = () => {
    return (
        /* https://github.com/chakra-ui/chakra-ui/issues/3173 */
      // place the menu to the box
        <HStack>
            <Menu>
                <MenuButton>
                    <Flex align="center">
                      <Center>
                        <Icon as={FaRedditSquare} fontSize={{ base: 24, lg: 30 }} color="gray.200" mr={1} />
                      </Center>
                        <Flex
                            direction="column"
                            align="flex-start"
                            fontSize="8pt"
                            mr={8}
                            display={{ base: 'none', lg: 'flex' }}
                    >
                        <Text fontWeight={700}>ovozlj</Text>
                        {/* I don't know why I need set width here */}
                        <Flex align="center" w="60px">
                            <Icon as={IoSparkles} color='brand.100' mr={1} />
                            <Text>1 karma</Text>
                        </Flex>
                    </Flex>
                    <Icon as={ChevronDownIcon} ml="auto" />
                </Flex>
            </MenuButton>
            <MenuList>
                <MenuItem>
                    <HStack>
                        <Icon as={CgProfile} fontSize={22} />
                        <Text fontWeight={600}>Profile</Text>
                    </HStack>
                </MenuItem>
                <MenuDivider />
                <MenuItem>
                    <HStack onClick={async () => { await signOut(auth) }}>
                        <Icon as={FiLogOut} fontSize={22} />
                        <Text fontWeight={600}>Logout</Text>
                    </HStack>
                </MenuItem>
            </MenuList>
        </Menu>
      </HStack>

        )


}
export default UserMenu
