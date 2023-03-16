import AuthModal from '@/app/modals/auth'
import { authModalAtom } from '@/atoms/authModalAtom'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react'
import { User } from 'firebase/auth'
import { useSetAtom } from 'jotai'
import { CgProfile } from 'react-icons/cg'
import { FiLogIn } from 'react-icons/fi'
import AuthButtons from '../AuthButtons'
import Icons from './Icons'
import UserMenu from './UserMenu'

interface Props {
  user?: User | null
}
const RightContent = ({ user }: Props) => {
  const setAuthModalState = useSetAtom(authModalAtom)
  return (
    <>
      <AuthModal />
      <HStack>
        {user ? <Icons /> : <AuthButtons />}
        {user ? (
          <UserMenu user={user} />
        ) : (
          <Center>
            <Menu>
              <MenuButton>
                <HStack spacing="1px">
                  <Icon as={CgProfile} fontSize={30} color="gray.400" />
                  <ChevronDownIcon fontSize={22} />
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <HStack
                    onClick={() =>
                      setAuthModalState({ view: 'login', open: true })
                    }
                  >
                    <Icon as={FiLogIn} fontSize={22} />
                    <Text fontWeight={600}>Login / Sign Up</Text>
                  </HStack>
                </MenuItem>
              </MenuList>
            </Menu>
          </Center>
        )}
      </HStack>
    </>
  )
}

export default RightContent
