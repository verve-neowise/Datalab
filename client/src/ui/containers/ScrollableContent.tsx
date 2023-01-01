import { Container, CSS } from "@nextui-org/react"

type Props = {
    css?: CSS,
    children?: JSX.Element | null |  (JSX.Element | null)[] | string
}

export default ({css, children} : Props) => {
    return (
        <Container css={{ ...css }}>
            {children}
        </Container>
    )
}