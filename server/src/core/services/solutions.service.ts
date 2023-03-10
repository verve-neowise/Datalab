import { prisma } from "../../shared/database/client";

export function addSolution(taskId: number, userId: number, solution: string) {
    return prisma.solution.create({
        data: {
            taskId,
            userId,
            solution
        }
    })
}

export function updateSolution(solutionId: number, solution: string) {
    return prisma.solution.update({
        where: {
            id: solutionId
        },
        data: {
            solution
        }
    })
}

export function deleteSolution(taskId: number, userId: number) {
    return prisma.solution.deleteMany({
        where: {
            taskId,
            userId
        }
    })
}

export function deleteSolutionById(id: number) {
    return prisma.solution.delete({
        where: {
            id
        }
    })
}

export function findSolutionByTaskAndUser(taskId: number, userId: number) {
    return prisma.solution.findFirst({
        where: {
            taskId,
            userId
        }
    })
}

export function findUserSolutions(userId: number) {
    return prisma.solution.findMany({
        where: {
            userId
        }
    })
}