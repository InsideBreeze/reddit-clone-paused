import { SearchIcon } from '@chakra-ui/icons'
import { InputGroup, InputLeftElement, Input } from '@chakra-ui/react'
const SearchInput = () => {
    return (
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon color='gray.300' mt={1} />}
            />
            <Input placeholder='Search Reddit' borderRadius='md'
                _hover={{
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
            />
        </InputGroup>
    )
}

export default SearchInput
