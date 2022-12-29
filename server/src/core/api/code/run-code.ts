import { executeCode } from "../../infrastructure/code-runner";
import { CodeDto } from "../../models/code";
import { findCases } from "../../services/cases.service";
import { findTask } from "../../services/tasks.service";

export const CodeSchema = {
    solution: "string",
    taskId: "number"
}

export default async (code: CodeDto, callback: (status: number, body: {}) => void) => {

    const task = await findTask(code.taskId)

    if (!task) {
        return callback(400, {
            message: "Task " + code.taskId + "not found"
        })
    }

    const tests = await findCases(code.taskId)

    if (tests.length == 0) {
        return callback(404, {
            message: "No test cases for task " + code.taskId
        })
    }

    return executeCode(code.solution, tests)
}