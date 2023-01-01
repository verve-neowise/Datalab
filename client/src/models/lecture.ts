import { BaseResponse } from "../base"

export interface Lecture {
    id: number
    name: string
    description: string
    content: string
}

export interface LectureResponse extends BaseResponse {
    lecture: Lecture
}