import { Request, Response } from "express";
import { CodeDto } from "../../models/code";
import { addSolution, findSolutionByTaskAndUser, updateSolution } from "../../services/solutions.service";
import runCode from "./run-code";

export default async (req: Request, res: Response) => {
    const codeDto: CodeDto =  req.body

    const { taskId } = codeDto
    const { id } = res.locals.user

    const response = await runCode(codeDto, (status, body) => {
        res.status(status).json(body)
    })

    if (response) {

        if (response.isSuccess) {
            const solution = await findSolutionByTaskAndUser(codeDto.taskId, id)
            const exists = solution != null

            if (exists) {
                await updateSolution(solution.id, codeDto.solution)
            }
            else {
                await addSolution(taskId, id, codeDto.solution)
            }
        }

        res.status(200).json({
            message: "Review code",
            success: response.isSuccess,
            result: response.result
        })
    }
}