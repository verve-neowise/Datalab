import { Lecture } from "@prisma/client"

export class LectureDto  {
    readonly name: string = ""
    readonly content: string = ""   
    readonly description: string = ""   
}

export type LectureModel = {
    id: number
    name: string
    content?: string   
    description: string   
}

export class LectureResponse {

    private id: number
    private name: string
    private content?: string
    private description: string

    constructor(lecture: LectureModel) {
        this.id = lecture.id
        this.name = lecture.name,
        this.content = lecture.content
        this.description = lecture.description
    }
}