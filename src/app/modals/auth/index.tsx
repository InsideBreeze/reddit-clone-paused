import { authModalAtom } from '@/atoms/authModalAtom'
import { auth } from '@/firebase'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import AuthInputs from './AuthInputs'

const AuthModal = () => {
  const [authModalState, setAuthModalState] = useAtom(authModalAtom)
  const [user] = useAuthState(auth)

    useEffect(() => {
      if (user) {
        setAuthModalState(prev => ({...prev, open: false}))
      }
    }, [user]);

  return (
    <>
      <Modal
        isOpen={authModalState.open}
        onClose={() => setAuthModalState(prev => ({ ...prev, open: false }))}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {authModalState.view === 'login' && 'Login'}
            {authModalState.view === 'signUp' && 'Sign up'}
            {authModalState.view === 'resetPassword' && 'Reset Password'}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AuthInputs />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AuthModal
