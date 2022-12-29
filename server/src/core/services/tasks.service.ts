import { TaskDto } from "../models/task"
import { prisma } from "../../common/services/client"

export function createTask(lectureId: number, task: TaskDto) {
    return prisma.task.create({
        data: {
            name: task.name,
            content: task.content,
            description: task.description,
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

export function allTasksByLecture(lectureId: number) {
    return prisma.task.findMany({
        where: {
            lectureId
        }
    })
}

export function allTasks() {
    return prisma.task.findMany()
}

export function deleteTask(id: number) {
    return prisma.task.delete({
        where: {
            id
        }
    })
}

export function updateTask(id: number, task: TaskDto) {
    return prisma.task.update({
        where: {
            id
        },
        data: {
             name: task.name,
             description: task.description,
             content: task.content
        }
    })
}

export function allTasksCount() {
    return prisma.task.count()
}

export function lectureTasksCount(lectureId: number) {
    return prisma.task.count({
        where: {
            lectureId
        }
    })
}