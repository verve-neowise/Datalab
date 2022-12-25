import { NextFunction, Request, Response } from "express"
import { LectureResponse } from "../../models/lecture"
import { findLectures } from "../../services/lectures.service"

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lectures = await findLectures()

        res.json({
            message: "All lectures",
            lectures: lectures.map(lecture => new LectureResponse(lecture))
        })
    }
    catch(err: any) {
        next(err)        
    }
}