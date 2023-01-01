import { NextFunction, Request, Response } from "express"
import { LectureResponse } from "../../models/lecture"
import { findLecture, findLectures } from "../../services/lectures.service"

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const lecture = await findLecture(+id)

        if (!lecture) {
            return res.status(404).json({
                message: "Lecture " + id + " not found"
            })
        }

        res.json({
            message: "Lecture " + id,
            lecture: new LectureResponse(lecture)
        })
    }
    catch(err: any) {
        next(err)        
    }
}