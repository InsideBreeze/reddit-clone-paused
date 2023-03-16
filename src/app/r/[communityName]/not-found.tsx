'use client'
import { Button, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Flex direction="column" w="full" align="center" my={100}>
      <Text color="black" fontSize={20}>
        Sorry, that community does not exist or has been banned
      </Text>
      <Link href="/">
        <Button mt={4} h="40px">
          GO HOME
        </Button>
      </Link>
    </Flex>
  )
}
