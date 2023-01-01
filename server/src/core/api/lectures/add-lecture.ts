import { NextFunction, Request, Response } from "express"
import { Schema } from '../../../shared/middlewares/validator'
import { LectureDto, LectureResponse } from "../../models/lecture"
import { createLecture } from "../../services/lectures.service"

export const LectureSchema: Schema =  {
    name: "string",
    content: "string",
    description: "string"
}

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lectureDto: LectureDto = req.body

        const lecture = await createLecture(lectureDto)

        res.json({
            message: "Lecture created",
            lecture: new LectureResponse(lecture)
        })
    }
    catch(err: any) {
        next(err)        
    }
}