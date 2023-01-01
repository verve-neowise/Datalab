import { Button, Loading } from "@nextui-org/react"

type Props = {
    isLoading: boolean
    onClick: () => void
    children: JSX.Element | JSX.Element[] | string
}

export default ({isLoading, children, onClick} : Props) => {
    return (
        <Button shadow disabled={isLoading} onClick={onClick}> 
        {
            isLoading ? <Loading color="currentColor" size="sm" /> : children
        }
        </Button>
    )
}
