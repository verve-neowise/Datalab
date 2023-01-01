import { Link as RouterLink, useNavigate } from 'react-router-dom'
import { Input, Link, Text } from '@nextui-org/react'

import AuthService from '../../../services/auth.service'
import LoadingButton from '../../components/LoadingButton'

import Center from '../../containers/Center'
import Flex from '../../containers/Flex'

import { useRef, useState } from 'react'
import { useMutation } from 'react-query'
import { storeAuth } from '../../../storage/auth.storage'

export default () => {

    const navigate = useNavigate()

    const nameRef = useRef<HTMLInputElement>(null)
    const groupRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [message, setMessage] = useState(null)

    const registerMutation = useMutation(AuthService.register, {
        onSuccess: (data) => {
            storeAuth(data)
            setMessage(data.message)
            navigate('/')
        },
        onError: (err: any) => {
            setMessage(err.message)
        }
    })

    const register = () => {
        const params = {
            username: usernameRef.current!.value,
            password: passwordRef.current!.value,
            name: nameRef.current!.value,
            group: groupRef.current!.value,
        }

        registerMutation.mutate(params)
    }

    return (
        <Center gap={10} orientation='vertical'>

            <Flex gap={15} css={{ width: "300px" }} orientation="vertical">

                <Text h2> Register </Text>

                {message ?? <Text color='primary'> {message} </Text>}

                <Input ref={usernameRef} placeholder='Username' />

                <Input.Password ref={passwordRef} placeholder='Password' />

                <Input ref={nameRef} placeholder='Your Name' />

                <Input ref={groupRef} placeholder='Group' />

                <LoadingButton isLoading={registerMutation.isLoading} onClick={register}>
                    Register
                </LoadingButton>
                <Link>
                    <RouterLink to={'/login'}>
                        Already have an account ?
                    </RouterLink>
                </Link>
            </Flex>
        </Center>
    )
}