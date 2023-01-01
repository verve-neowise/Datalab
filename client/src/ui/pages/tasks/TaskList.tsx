import { Card, Container, Text } from "@nextui-org/react"
import { Task as TaskModel } from "../../../models/task"
import Flex from "../../containers/Flex"
import Task from "./Task"

type Props = { 
    tasks: TaskModel[], 
    activeId: number, 
    onSelect: (task: TaskModel) => void
 }

export default ( { activeId, tasks, onSelect } : Props ) => {
    return (
        <Flex gap={10} orientation="vertical" css={{ margin: 0, width: '300px', padding: 10}}>
            {
                tasks.map(task => (
                 <Task onSelect={onSelect} task={task} isActive={ task.id == activeId}/> 
                ))
            }
        </Flex>
    )
}