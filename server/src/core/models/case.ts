import { Case } from '@prisma/client'

export class CaseDto {
    name: string = ""
    input: string = ""
    expect: string = ""
}

export class CaseResponse {

    private id: number
    private name: string
    private input: string
    private expect: string

    private taskId: number

    constructor(
        _case: Case
    ) {
        this.id = _case.id
        this.name = _case.name
        this.input = _case.input
        this.expect = _case.expect
        this.taskId = _case.taskId
    }
}
