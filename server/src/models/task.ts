import { Solution, Task } from "@prisma/client"
import { CaseDto, CaseResponse } from "./case"

export class TaskDto {
    readonly name: string = ""
    readonly description: string = ""
    readonly content: string = ""
    readonly cases: CaseDto[] = []
    readonly lectureId: number = -1
}

export class TaskResponse {

    readonly id: number
    readonly name: string
    readonly description: string
    readonly content: string
    readonly lectureId: number
    readonly isComplete: boolean
    readonly cases: CaseResponse[] | null
    readonly solution: string | null

    constructor(
        task: Task, solution: Solution | null = null, cases: CaseResponse[] | null = null
    ){
        this.id = task.id
        this.name = task.name
        this.description = task.description
        this.content = task.content
        this.lectureId = task.lectureId

        this.isComplete = solution != null
        this.solution = solution != null ? solution.solution : null
        this.cases = cases
    }
}