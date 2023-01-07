import { NextFunction, Request, Response } from "express"
import { deleteLecture } from "../../services/lectures.service"

export default async (req: Request, res: Response, next: NextFunction) => {

    const id = +req.params.id

    const lecture = await deleteLecture(id)

    if (lecture == null) {
        res.status(404).json({
            message: "Lecture " + id + " not found",
        })
    }
    else {
        res.status(200).json({
            message: 'Lecture ' + id + " has been deleted",
            lecture
        })
    }
}