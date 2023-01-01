import { BaseResponse } from "../base";

export interface Task {
    id: number,
    name: string,
    description: string,
    content: string,
}

export interface Case {
    id: number
    input: string
    expect: string
}

export interface TaskDetails extends Task {
    cases: Case[]
    lectureId: number
}

export interface TasksResponse extends BaseResponse {
    tasks: Task[]
}

export interface TaskDetailsResponse extends BaseResponse {
    tasks: Task
}
