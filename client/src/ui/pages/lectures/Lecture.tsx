import { Button, Card, Divider, Text } from "@nextui-org/react"
import { useNavigate } from "react-router-dom"
import { Lecture } from "../../../models"
import Icon from "../../components/Icon"
import Flex from "../../containers/Flex"

type Props = {
    lecture: Lecture
}

export default ( { lecture } : Props) => {

    const navigate = useNavigate()

    return (
        <Card variant="shadow">
            <Card.Body>
                <Flex gap={5} css={{alignItems: 'center', padding: '10px'}}> 
                    <Text color={'error'}>
                        <Icon name="Lock" size="16"/> 
                    </Text>
                    <Text h4 css={{margin: 0}}>{lecture.name} </Text>
                </Flex>
                <Text>
                    {lecture.description}
                </Text>
            </Card.Body>
            <Card.Footer>
                <Flex gap={15} orientation="horizontal" css={{  justifyContent: 'flex-start', alignItems: 'center' }}>
                    <Button  bordered borderWeight='light' color={'primary'} onPress={() => navigate('/lectures/' + lecture.id)}>
                        <Icon name="BookOpen"/>
                        Read Lecture    
                    </Button>                    
                    <Button  bordered borderWeight='light' color={'secondary'} onPress={() => navigate('/lectures/' + lecture.id + '/tasks') }> 
                        <Icon name="FlaskConical"/>
                        14 Tasks 
                    </Button>
                </Flex>
            </Card.Footer>
        </Card>
    )
}