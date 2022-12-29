import { User } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import { TaskResponse } from "../../models/task"
import { findUserSolutions } from "../../services/solutions.service"
import { allTasks, allTasksByLecture } from "../../services/tasks.service"

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user: User = res.locals.user
        const lectureId = req.query.lecture

        const tasks = lectureId ? 
            await allTasksByLecture(Number(lectureId)) : 
            await allTasks()

        const solutions = await findUserSolutions(user.id)

        res.json({
            message: lectureId ? `Lecture ${lectureId} tasks` : "All tasks",
            tasks: tasks.map(task => 
                new TaskResponse(
                    task,
                    solutions.find(solution => solution.taskId == task.id)
                )
            )
        })
    }
    catch(err: any) {
        next(err)        
    }
}