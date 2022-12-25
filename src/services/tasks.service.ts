import { TaskDto } from "../models/task"
import { prisma } from "./client"

export function createTask(lectureId: number, task: TaskDto) {
    return prisma.task.create({
        data: {
            ...task,
            lectureId
        }
    })
}

export function findTask(id: number) {
    return prisma.task.findUnique({
        where: {
            id
        }
    })
}

export function allTasks(lectureId: number) {
    return prisma.task.findMany({
        where: {
            lectureId
        }
    })
}

export function deleteTask(id: number) {
    return prisma.task.delete({
        where: {
            id
        }
    })
}