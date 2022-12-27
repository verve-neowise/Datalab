import { User } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import { CaseResponse } from "../../models/case"
import { TaskResponse } from "../../models/task"
import { findCases } from "../../services/cases.service"
import { findSolutionByTaskAndUser } from "../../services/solutions.service"
import { findTask } from "../../services/tasks.service"

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id
        const user: User = res.locals.user
        
        const task = await findTask(id)

        if (!task) {
            return res.status(404).json({
                message: "Task " + id + " not found"
            })
        }
        
        const cases = await findCases(id)

        const solution = await findSolutionByTaskAndUser(id, user.id)

        res.json({
            message: "Task " + id + " details",
            task: new TaskResponse(
                task, 
                solution, 
                cases.map(_case => new CaseResponse(_case))
            )
        })
    }
    catch(err: any) {
        next(err)        
    }
}