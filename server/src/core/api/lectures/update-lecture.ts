import { NextFunction, Request, Response } from "express"
import { LectureDto, LectureResponse } from "../../models/lecture"
import { updateLecture } from "../../services/lectures.service"

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id
        const lectureDto: LectureDto = req.body

        const lecture = await updateLecture(id, lectureDto)

        res.json({
            message: "Lecture updated",
            lecture: new LectureResponse(lecture)
        })
    }
    catch(err: any) {
        next(err)        
    }
}