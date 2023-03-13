import { authModalAtom } from '@/atoms/authModalAtom'
import { Button } from '@chakra-ui/react'
import { useSetAtom } from 'jotai'

const AuthButtons = () => {
  const setAuthModalState = useSetAtom(authModalAtom)
  return (
    <>
      <Button
        variant="outline"
        h="28px"
        display={{
          base: 'none',
          sm: 'flex'
        }}
        w={{ base: '70px', md: '110px' }}
        onClick={() => setAuthModalState({ view: 'login', open: true })}
      >
        Login
      </Button>
      <Button
        h="28px"
        display={{
          base: 'none',
          sm: 'flex'
        }}
        w={{ base: 'none', md: '110px' }}
        onClick={() => setAuthModalState({ view: 'signUp', open: true })}
      >
        Sign up
      </Button>
    </>
  )
}

export default AuthButtons
