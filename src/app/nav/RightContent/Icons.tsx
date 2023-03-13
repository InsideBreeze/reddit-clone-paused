import { Center, Divider, Flex, HStack, Icon, StackDivider } from '@chakra-ui/react'
import { BsArrowUpRightCircle, BsChatDots } from 'react-icons/bs'
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline
} from 'react-icons/io5'
import { GrAdd } from 'react-icons/gr'
const Icons = () => {
  return (
        <HStack divider={<StackDivider borderColor='gray.200' display={{ base: 'none', md: 'unset' }} />}
        >
            <HStack
                spacing={2.5}
                display={{ base: 'none', md: 'flex' }}
            >
                <Center
                    p={1}
                    _hover={{ bg: 'gray.200', borderRadius: 'md', bgOpacity: '10%' }}
                    cursor='pointer'
                >
                    <Icon as={BsArrowUpRightCircle} fontSize={20} />
                </Center>
                <Center
                    p={1}
                    _hover={{ bg: 'gray.200', borderRadius: 'md', bgOpacity: '10%' }}
                    cursor='pointer'
                >
                    <Icon as={IoFilterCircleOutline} fontSize={22} />
                </Center>
                <Center
                    p={1}
                    _hover={{ bg: 'gray.200', borderRadius: 'md', bgOpacity: '10%' }}
                    cursor='pointer'
                >
                    <Icon as={IoVideocamOutline} fontSize={22} />
                </Center>
            </HStack>

            <HStack spacing={2.5}>
                <Center
                    p={1}
                    _hover={{ bg: 'gray.200', borderRadius: 'md', bgOpacity: '10%' }}
                    cursor='pointer'
                >
                    <Icon as={BsChatDots} fontSize={20} />
                </Center>
                <Center
                    p={1}
                    _hover={{ bg: 'gray.200', borderRadius: 'md', bgOpacity: '10%' }}
                    cursor='pointer'
                >
                    <Icon as={IoNotificationsOutline} fontSize={20} />
                </Center>
                <Center
                    p={1}
                    _hover={{ bg: 'gray.200', borderRadius: 'md', bgOpacity: '10%' }}
                    display={{ base: 'none', md: 'flex' }}
                    cursor='pointer'
                >
                    <Icon as={GrAdd} fontSize={18} />
                </Center>
            </HStack>
        </HStack>
    )
}

export default Icons
