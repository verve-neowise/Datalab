import { Solution, Task, User } from "@prisma/client"
import { NextFunction, Request, Response } from "express"
import { findUserSolutions } from "../../services/solutions.service"
import { allTasks, allTasksCount } from "../../services/tasks.service"


export default async (req: Request, res: Response, next: NextFunction) => {
    
    const user: User = res.locals.user

    const tasks = await allTasks()
    const solutions = await findUserSolutions(user.id)

    const solvedTasks = tasks.filter(task => hasSolution(task, solutions))

    const {name, username, group, id } = user

    res.json({
        message: "User Account",
        user: {
            id, 
            name,
            username,
            group
        },
        progress: (solvedTasks.length / tasks.length).toFixed(2),
        tasks: solvedTasks
    })
}

function hasSolution(task: Task, solutions: Solution[]) {
    return solutions.find(solution => solution.taskId == task.id) != undefined
}