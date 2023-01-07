import { NextFunction, Request, Response } from "express"
import { deleteLecture, findLecture } from "../../services/lectures.service"

export default async (req: Request, res: Response, next: NextFunction) => {

    const id = +req.params.id

    const find = await findLecture(id)

    if (find) {
        const lecture = await deleteLecture(id)
        res.status(200).json({
            message: 'Lecture ' + id + " has been deleted",
            lecture
        })
    }
    else {
        res.status(404).json({
            message: "Lecture " + id + " not found",
        })
    }
}