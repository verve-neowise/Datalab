import { NextFunction, Request, Response } from "express"
import { CaseResponse } from "../../models/case"
import { TaskDto, TaskResponse } from "../../models/task"
import { createCases, deleteCases } from "../../services/cases.service"
import { updateTask } from "../../services/tasks.service"

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id
        const taskDto: TaskDto = req.body

        const task = await updateTask(id, taskDto)
        // delete old cases
        await deleteCases(id)
        // create new cases
        const cases = await createCases(id, taskDto.cases)

        res.json({
            message: "Task " + id + " updated",
            task: new TaskResponse(
                task,
                null,
                cases.map(_case => new CaseResponse(_case))
            )
        })
    }
    catch(err: any) {
        next(err)        
    }
}