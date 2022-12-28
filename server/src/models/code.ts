export class CodeDto {
    readonly solution: string = ""
    readonly taskId: number = -1
}

export type CodeStatus = 'success' | 'error' | 'failed'
export type RunStatus = 'success' | 'failed'

export class RunResult {

    constructor(
        public readonly caseId: number,
        public readonly message: string,
        public readonly status: RunStatus
    ) {}
}

export class CodeResponse {

    public readonly isSuccess: boolean = false

    constructor(
        public readonly status: CodeStatus,
        public readonly result: RunResult[] | RunResult
    ) {
        if (Array.isArray(this.result)) {
            this.isSuccess = this.result.every(res => res.status == 'success')
        }
        else {
            this.isSuccess = this.result.status == 'success'
        }
    }
}
