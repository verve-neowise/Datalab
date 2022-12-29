import { Case } from "@prisma/client";
import { CodeResponse, RunResult, RunStatus } from "../models/code";

export function executeCode(code: string, tests: Case[]): CodeResponse {
    try {
        const exector = eval(code)
        const results: RunResult[] = tests.map(test => execute(exector, test))

        return new CodeResponse('success', results)
    }
    catch(err: any) {
        
        const result: RunResult = { 
            caseId: -1, 
            message: err.toString(),
            status: 'failed'
        }

        return new CodeResponse('error', result)
    }
}

function execute(exector: any, test: Case): RunResult {
    try {       
        const input = eval('module.exports = ' + test.input)
        const expected = eval('module.exports = ' + test.expect)

        const res = exector(...Object.values(input))

        const message: string = res === expected ? 'Successfuly' : `Expected ${expected}, but received ${res}`
        const status: RunStatus = res === expected ? 'success' : 'failed'

        return {
            caseId: test.id,
            message,
            status
        }
    }
    catch(err: any) {
        return {
            caseId: test.id,
            message: err.toString(),
            status: 'failed'
        }
    }
}