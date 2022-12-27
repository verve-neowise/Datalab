import { User } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import { deleteCases } from "../../services/cases.service"
import { deleteSolution } from "../../services/solutions.service"
import { deleteTask } from "../../services/tasks.service"

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const taskId = +req.params.id

        const user: User = res.locals.user

        const task = await deleteTask(taskId)
        await deleteCases(taskId)
        await deleteSolution(user.id, taskId)

        res.status(200).json({
            message: "Task deleted",
            task
        })
    }
    catch(err: any) {
        next(err)        
    }
}