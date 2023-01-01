import { Container } from "@nextui-org/react"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { Lecture as LectureModel } from "../../../models"
import LecturesService from "../../../services/lectures.service"
import LoadingHeading from "../../components/LoadingHeading"
import Navbar from "../../components/Navbar"
import Flex from "../../containers/Flex"
import Lecture from "./Lecture"

export default () => {

    const navigate = useNavigate()

    const query = useQuery('lectures', LecturesService.getLectures)

    return (
        <>
            <Navbar/>
            <Container sm css={{ padding: 15 }}>
                <LoadingHeading title="Lectures" isLoading = {query.isLoading}/>
                {
                    query.isSuccess && (
                        <Flex gap={25} css={{ padding: 25 }}>
                            {
                                query.data.lectures.map((lecture: LectureModel) => (
                                    <Lecture key={lecture.id} lecture={lecture}/>
                                ))
                            }
                        </Flex>
                    )
                }
            </Container>
        </>
    )
}