import { Container, Text } from "@nextui-org/react"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import LecturesService from "../../../services/lectures.service"
import LoadingHeading from "../../components/LoadingHeading"
import Navbar from "../../components/Navbar"

export default () => {

    const { id } = useParams()

    const query = useQuery('lecture/' + id, () => LecturesService.getLecture(+id!))

    console.log(query.data)

    return (
        <>
            <Navbar/>
            <Container sm css={{padding: 20}}>
                <LoadingHeading 
                    isLoading = { query.isLoading }
                    title={ query.isLoading ? 'Read Lecture' : query.data.lecture.name }
                />
                <Text css={{padding: 20}}>
                    {
                        query.isSuccess && query.data.lecture.content
                    }
                </Text>
            </Container>
        </>
    )
}