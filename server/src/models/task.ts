import { Solution, Task } from "@prisma/client"

export class TaskDto {
    readonly name: string = ""
    readonly description: string = ""
    readonly content: string = ""
}

export class TaskResponse {

    readonly id: number
    readonly name: string
    readonly description: string
    readonly content: string
    readonly lectureId: number
    readonly isComplete: boolean
    readonly solution: string | null

    constructor(
        task: Task, solution: Solution | null
    ){
        this.id = task.id
        this.name = task.name
        this.description = task.description
        this.content = task.content
        this.lectureId = task.lectureId

        this.isComplete = solution != null
        this.solution = solution != null ? solution.solution : null
    }
}