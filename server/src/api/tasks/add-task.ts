import { NextFunction, Request, Response } from "express"
import { Schema } from "../../middlewares/validator"
import { TaskDto, TaskResponse } from "../../models/task"
import { createCases } from "../../services/cases.service"
import { createTask } from "../../services/tasks.service"

export const TaskSchema: Schema = {
    name: "string",
    description: "string",
    content: "string",
    cases: "array",
    lectureId: "number"
}

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const taskDto: TaskDto = req.body

        const task = await createTask(taskDto.lectureId, taskDto)
        await createCases(task.id, taskDto.cases)
        
        res.status(201).json({
            message: "Task created",
            task: new TaskResponse(task)
        })
    }
    catch(err: any) {
        next(err)        
    }
}