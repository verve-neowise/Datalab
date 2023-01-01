import { Divider, Loading, Progress, Text } from "@nextui-org/react"
import Flex from "../containers/Flex"

type Props = {
    title?: string
    isLoading?: boolean
}

export default ({ title = "", isLoading = false }: Props) => {
    return (
        <>
            <Flex css={{ justifyContent: "space-between", alignItems: 'center' }}>
                <Text h3> {title} </Text>
                {
                    isLoading ? <Loading /> : null
                }
            </Flex>
            <Divider />
        </>
    )
}