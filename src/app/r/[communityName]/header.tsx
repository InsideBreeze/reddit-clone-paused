'use client'
import { Community } from '@/atoms/communitiesAtom'
import { auth } from '@/firebase';
import useCommunityData from '@/hooks/useCommunityData';
import { Box, Center, HStack, Image, Icon, Text, Button } from '@chakra-ui/react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaReddit } from 'react-icons/fa';

const Header = ({ communityData }: { communityData: Community }) => {

  const {communityState, loading} = useCommunityData()

  const isJoined = !!communityState.mySnippets.find(snippet => snippet.communityId === communityData.id)


  return (
    <Box h="146px">
      <Box h="50%" bg="blue.500" />
      <Center h="50%" bg='white'>
        <HStack w='95%' h='full' maxW='860px' align='flex-start'>
          {
            communityData.imageURL ? (
              <Image />
            ) : (
              <>
              <Icon as={FaReddit} fontSize={64} pos='relative' top={-3} color='blue.500'
                    border='4px solid white'
                    borderRadius='50%'
              />
              <HStack p='10px 16px' align='flex-start'>
              <Box mr={6}>
                <Text fontWeight={800} fontSize='xl'>{communityData.id}</Text>
                <Text color='gray.400' fontWeight={600}>r/{communityData.id}</Text>
              </Box>
              <Button h='30px' px={6}>{isJoined ? 'joined' : 'join' }</Button>
              </HStack>
        </>
            )
          }
        </HStack>
      </Center>
    </Box>
  )
}

export default Header
