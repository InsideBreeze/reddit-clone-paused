import { authModalAtom } from '@/atoms/authModalAtom'
import { auth } from '@/firebase'
import { Button, Input, VStack, Text } from '@chakra-ui/react'
import { useSetAtom } from 'jotai'
import { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
const SignUp = () => {
  const setAuthModalState = useSetAtom(authModalAtom)
  const [fieldValues, setFieldValues] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  })
  const [error, setError] = useState('')

  const [createUserWithEmailAndPassword, user, loading, signUpError] =
    useCreateUserWithEmailAndPassword(auth)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValues({
      ...fieldValues,
      [e.target.name]: e.target.value
    })
  }

  const onSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (fieldValues.password !== fieldValues.passwordConfirm) {
      setError('password and passwordConfirm are not matched')
      return
    }

    const user = await createUserWithEmailAndPassword(
      fieldValues.email,
      fieldValues.password
    )
    if (user) {
      setAuthModalState(prev => ({ ...prev, open: false }))
    }
  }

  return (
    <form onSubmit={onSignUp}>
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
          name="password"
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
        <Input
          type="password"
          name="passwordConfirm"
          placeholder="password confirm"
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
        <Button w="full" type="submit" isLoading={loading}>
          Sign Up
        </Button>
        <Text color="red" fontSize="10pt">
          {/* TODO: signInError                     */}
          {error}
        </Text>
        <Text>
          Already redditor?
          <Button
            type="button"
            variant="link"
            color="blue.500"
            textDecor="underline"
            ml={1}
            fontWeight={700}
            onClick={() => setAuthModalState({ view: 'login', open: true })}
          >
            Log In
          </Button>
        </Text>
      </VStack>
    </form>
  )
}

export default SignUp
