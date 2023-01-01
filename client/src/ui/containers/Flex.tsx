import { Container, CSS } from "@nextui-org/react"

type Props =  { 
    gap?: number
    orientation?: 'vertical' | 'horizontal'
    css?: CSS
    children?: JSX.Element | null |  (JSX.Element | null)[]
}

export default ({ gap = 0, orientation = 'horizontal', css, children } : Props) => {
    const direction = orientation == 'vertical' ? 'column' : 'row'

    return (
        <Container responsive={false} fluid css={{ 
            display: "flex",
            padding: '0',
            ...css,
            flexDirection: direction, 
            gap 
        }} >
            {children}
        </Container>
    )
}