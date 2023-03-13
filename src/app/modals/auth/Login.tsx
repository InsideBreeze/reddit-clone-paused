import { authModalAtom } from '@/atoms/authModalAtom'
import { auth } from '@/firebase'
import { Button, Input, VStack, Text } from '@chakra-ui/react'
import { useSetAtom } from 'jotai'
import { useState } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

const Login = () => {
  const [fieldValues, setFieldValues] = useState({
      email: '',
      password: ''
  })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const setAuthModalState = useSetAtom(authModalAtom)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValues({
      ...fieldValues,
      [e.target.name]: e.target.value
    })
  }

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    await signInWithEmailAndPassword(fieldValues.email, fieldValues.password)
  }

  return (
      <form onSubmit={onLogin}>
      <VStack w="280px">
        <Input
          placeholder="email"
          name="email"
          type="email"
          _hover={{
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          _focus={{
            border: '1px solid',
            outline: 'none',
            borderColor: 'blue.500'
          }}
          onChange={onChange}
        />
        <Input
          type="password"
          name='password'
          placeholder="password"
          _hover={{
            border: '1px solid',
            borderColor: 'blue.500'
          }}
          _focus={{
            border: '1px solid',
            outline: 'none',
            borderColor: 'blue.500'
          }}
          onChange={onChange}
        />
        <Button w="full" type='submit' isLoading={loading}>Log in</Button>
        <Text>
          New here?
          <Button
            variant="link"
            color="blue.500"
            textDecor="underline"
            ml={1}
            type="submit"
            onClick={() => setAuthModalState({ view: 'signUp', open: true })}
            fontWeight={700}
          >
            Sign Up
          </Button>
        </Text>
      </VStack>
    </form>
  )
}

export default Login
