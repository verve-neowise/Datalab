import { Container, CSS } from "@nextui-org/react"

type Props =  { 
    gap?: number,
    orientation: 'vertical' | 'horizontal'
    children: JSX.Element | null |  (JSX.Element | null)[] | string
}

export default ({ gap = 0, orientation = 'vertical', children } : Props) => {
    return (
        <Container css={{ ...styles, flexDirection: orientation == 'vertical' ? 'column' : 'row', gap }}>
            {children}
        </Container>
    )
}

const styles: CSS = {
     minHeight: "100vh", 
     display: "flex", 
     justifyContent: "center", 
     alignItems: "center" 
}