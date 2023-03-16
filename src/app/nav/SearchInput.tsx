import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement, Input, Flex } from '@chakra-ui/react'
import { User } from 'firebase/auth'

interface Props {
  user?: User | null
}
const SearchInput = ({ user }: Props) => {
  return (
    <Flex flexGrow={1} maxW={user ? 'auto' : '600px'} align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" mt={1} />}
        />
        <Input
          placeholder="Search Reddit"
          fontSize="10pt"
          borderRadius="md"
          _hover={{
            border: '1px solid',
            borderColor: 'blue.500'
          }}
        />
      </InputGroup>
    </Flex>
  )
}

export default SearchInput
