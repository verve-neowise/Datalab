import { Card, Text } from "@nextui-org/react"
import { Task } from "../../../models/task"

type Props = {
    task: Task,
    onSelect: (task: Task) => void,
    isActive: boolean
}

export default ({ task, isActive, onSelect }: Props) => {
    const css = isActive ? { backgroundColor: '$primary', color: 'White' } : {}
    
    return (
        <Card isPressable variant="flat" css={css} onPress={() => onSelect(task) }>
            <Card.Body>
                <Text b color={css.color}>
                    {task.name}
                </Text>
                {task.description}
            </Card.Body>
        </Card>
    )
}