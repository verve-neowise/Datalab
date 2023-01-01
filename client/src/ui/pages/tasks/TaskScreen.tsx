import { useState } from "react"
import { Spacer, Text, Textarea } from "@nextui-org/react"
import { Task } from "../../../models/task"
import Navbar from "../../components/Navbar"
import Flex from "../../containers/Flex"
import TaskList from "./TaskList"

export default () => {

    const tasks: Task[] = [
        {
            id: 1,
            name: "Task 1",
            description: "Add two number and return result",
            content: "Noting. Read description"
        },
        {
            id: 2,
            name: "Task 2",
            description: "Add two number and return result",
            content: "Noting. Read description"
        },
        {
            id: 3,
            name: "Task 3",
            description: "Add two number and return result",
            content: "Noting. Read description"
        },
    ] 

    const [task, selectTask] = useState<Task | null>(null)

    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
            <Navbar/>
            <Flex orientation="horizontal" css={{flex: 1}}>
                <TaskList activeId={task ? task.id : -1} tasks={tasks} onSelect={selectTask}/>
                <Flex css={{ flex: 1, padding: 10 }} orientation="vertical">
                    <Text b> {task?.name} </Text>
                    <Text> {task?.content} </Text>
                    <Spacer/>
                    <Textarea bordered borderWeight="light" rows={15}></Textarea>
                </Flex>
            </Flex>
        </div>
    )
}