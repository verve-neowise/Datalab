import { Task } from "@prisma/client";
import { Request, Response } from "express";
import { CodeDto } from "../../models/code";
import runCode from "./run-code";

export default async (req: Request, res: Response) => {
    const codeDto: CodeDto =  req.body

    const response = await runCode(codeDto, (status, body) => {
        res.status(status).json(body)
    })

    if (response) {
        res.status(200).json({
            message: "Test code",
            result: response
        })
    }
}