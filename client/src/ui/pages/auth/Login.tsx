import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Button, Input, Link, Loading, Text } from '@nextui-org/react'
import Center from '../../containers/Center'
import Flex from '../../containers/Flex'
import { useMutation } from 'react-query'
import AuthService, { LoginParams } from '../../../services/auth.service'
import { useRef, useState } from 'react'
import LoadingButton from '../../components/LoadingButton'
import { storeAuth } from '../../../storage/auth.storage'


export default () => {
    const usernameRef = useRef<HTMLInputElement>(null)    
    const passwordRef = useRef<HTMLInputElement>(null)    

    const navigate = useNavigate()

    const [ message, setMessage ] = useState(null)

    const loginMutation = useMutation(AuthService.login, {
        onSuccess: (data) => {
            storeAuth(data)
            setMessage(data.message)
            navigate('/')
        },
        onError: (err: any) => {
            setMessage(err.message)
        }
    })

    const login = () => {
        const params = {
            username: usernameRef.current!.value,
            password: passwordRef.current!.value
        }

        loginMutation.mutate(params)
    }

    return (
        <>
            <Center gap={10} orientation='vertical'>

                <Flex gap={15} css={{ width: "300px" }} orientation="vertical">

                    <Text h2> Login </Text>

                    { message ?? <Text color='primary'> {message} </Text> }

                    <Input ref={usernameRef} placeholder='Username' />
                    <Input.Password ref={passwordRef} placeholder='Password' />

                    <LoadingButton isLoading={loginMutation.isLoading} onClick={login}>
                        Login
                    </LoadingButton>
                    <Link>
                        <RouterLink to={'/register'}>
                            Dont have an account? 
                        </RouterLink> 
                    </Link>
                </Flex>
            </Center>
        </>
    )
}