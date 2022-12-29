import { Button, Container, Input, Link } from '@nextui-org/react'

type Props = {
    onChangeMode: (mode: string) => void
}

export default () => {
    return (
        <>
            <Container css={{ display: 'flex', justifyContent: "center", flexDirection: "column", gap: "15px" }}>
                <Input placeholder='Username' />
                <Input.Password placeholder='Password' />
                <Input placeholder='Your Name' />
                <Input placeholder='Group' />
                <Button> Register </Button>
                <Link> Already have an account ? </Link>
            </Container>
        </>
    )
}