import { Center, Menu, Flex, HStack, Icon, Text, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { AiFillHome } from 'react-icons/ai'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CreateCommunity from './CreateCommunity'


const Directory = () => {
    return (
        <Center mx='12px' display={{ base: 'none', sm: 'flex' }}>
            <Menu>
                <MenuButton ml={{ base: 0, lg: 2 }}>
                    <Flex align="center" justify="space-between" width={{ base: 'auto', lg: '150px' }}>
                        <HStack>
                            <Icon as={AiFillHome} fontSize={20} />
                            <Text fontWeight={500} display={{ base: 'none', lg: 'flex' }}>Home</Text>
                        </HStack>
                        <Icon as={ChevronDownIcon} fontSize={20} />
                    </Flex>
                </MenuButton>
                <MenuList>
                    <CreateCommunity />
                </MenuList>
            </Menu>
        </Center>

    )


}

export default Directory
