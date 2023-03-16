import {
    useDisclosure, Box, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton
    , ModalBody, ModalFooter, Divider, Text, Input, Stack, Checkbox, Flex, Icon, HStack
} from '@chakra-ui/react'
import { BsEyeFill, BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs'
import { HiLockClosed } from 'react-icons/hi'

interface Props {
    open: boolean;
    onClose: () => void
}

const CreateCommunityModal = ({ open, onClose }: Props) => {
  return (
        <>

            <Modal isOpen={open} onClose={onClose} size='xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create a community</ModalHeader>
                    <ModalCloseButton />
                    <Divider orientation='horizontal' />
                    <ModalBody>
                        <Text fontWeight={600}>Name</Text>
                        <Text fontSize='sm' color='gray.600'>Community names including capitalization cannot be changed</Text>
                        <Text fontSize={20} pos='relative' top={8} pl={2} color='gray.500'>r/</Text>
                        <Input pl={6} h='35px' />
                        <Text fontSize='sm'>{21} characters remaining</Text>

                        <Flex direction='column' mt={4}>
                            <Text fontWeight={600}>Community Type</Text>
                            <Checkbox defaultChecked>
                                <HStack color='gray.600'>
                                    <Icon as={BsFillPersonFill} fontSize={16} />
                                    <Text fontSize={14}>Public</Text>
                                    <Text fontSize={12}>Anyone can view, post, and comment to this community</Text>
                                </HStack>

                            </Checkbox>
                            <Checkbox>
                                <HStack color='gray.600'>
                                    <Icon as={BsEyeFill} fontSize={16} />
                                    <Text fontSize={14}>Restricted</Text>
                                    <Text fontSize={12}>Anyone can view, post, and comment to this community</Text>
                                </HStack>
                            </Checkbox>
                            <Checkbox>
                                <HStack color='gray.600'>
                                    <Icon as={HiLockClosed} fontSize={16} />
                                    <Text fontSize={14}>Private</Text>
                                    <Text fontSize={12}>Only approved users can view and submit to this community</Text>
                                </HStack>
                            </Checkbox>
                        </Flex>
                    </ModalBody>

                    <ModalFooter bg='gray.100' borderRadius='0px 0px 10px 10px' mt={5}>
                      <Button variant='outline' h='30px' onClick={onClose} mr={2}>
                            Cancle
                        </Button>
                        <Button variant='solid' h='30px'>Create Community</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}


export default CreateCommunityModal
