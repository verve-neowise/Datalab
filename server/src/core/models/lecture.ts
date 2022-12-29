import { Lecture } from "@prisma/client"

export class LectureDto  {
    readonly name: string = ""
    readonly content: string = ""   
}

export class LectureResponse {

    private id: number
    private name: string
    private content: string

    constructor(lecture: Lecture) {
        this.id = lecture.id
        this.name = lecture.name,
        this.content = lecture.content
    }
}