import { Button } from "@chakra-ui/react"

const AuthButtons = () => {
    return (
        <>
            <Button variant='outline' h='28px' display={{
                base: 'none',
                md: 'flex'
            }} w={{md: '110px'}}>Login</Button>
            <Button h='28px' display={{
                base: 'none',
                md: 'flex'
            }} w={{md: '110px'}}>Sign up</Button>
        </>
    )
}

export default AuthButtons
