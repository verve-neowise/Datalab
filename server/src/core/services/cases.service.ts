import { Case } from '@prisma/client';
import { CaseDto } from '../models/case';
import { prisma } from '../../shared/database/client'

export async function createCases(taskId: number, cases: CaseDto[]) {

    const newCases: Case[] = []

    for (let _case of cases) {
        const newCase = await prisma.case.create({
            data: {
                name: _case.name,
                input: _case.input,
                expect: _case.expect,
                taskId
            }
        })
        newCases.push(newCase)
    }
    return newCases
}

export function findCases(taskId: number) {
    return prisma.case.findMany({
        where: {
            taskId
        }
    })
}

export function deleteCases(taskId: number) {
    return prisma.case.deleteMany({
        where: {
            taskId
        }
    })
}
