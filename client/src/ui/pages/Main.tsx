import { Container, CSS } from "@nextui-org/react"
import Navbar from "../components/Navbar"

type Props = {
    children: (JSX.Element | JSX.Element | null | string)[] | JSX.Element
}

export default ({ children }: Props) => {
    return (
        <Container fluid css={styles}>
            <Navbar />
            <Container fluid css={{ flex: 1 }}>
                {children}
            </Container>
        </Container>
    )
}

const styles: CSS = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
}
