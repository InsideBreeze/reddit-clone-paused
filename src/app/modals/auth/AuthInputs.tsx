import { authModalAtom } from '@/atoms/authModalAtom'
import { Flex } from '@chakra-ui/react'
import { useAtomValue } from 'jotai'
import Login from './Login'
import SignUp from './SignUp'

const AuthInputs = () => {
  const authModalState = useAtomValue(authModalAtom)
  return (
    <Flex justify="center">
      {authModalState.view === 'login' && <Login />}
      {authModalState.view === 'signUp' && <SignUp />}
    </Flex>
  )
}

export default AuthInputs
