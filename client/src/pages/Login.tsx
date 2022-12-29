import { Button, Container, Input, Link } from '@nextui-org/react'

type Props = {
    onChangeMode: (mode: string) => void
}

export default ({ onChangeMode } : Props) => {
    return (
        <>
            <Container css={{ display: 'flex', justifyContent: "center", flexDirection: "column", gap: "15px" }}>

                <Input placeholder='Username' />
                <Input.Password placeholder='Password' />

                <Button> Login </Button>

                <Link onClick={ () => onChangeMode('register') }> Dont have an account? </Link>
            </Container>
        </>
    )
}