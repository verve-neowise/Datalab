import { LectureDto } from "../models/lecture"
import { prisma } from "../../common/services/client"


export function createLecture(lecture: LectureDto) {
    return prisma.lecture.create({
        data: {
            ...lecture
        }
    })
}

export function updateLecture(id: number, lecture: LectureDto) {
    return prisma.lecture.update({
        where: {
            id
        },
        data: {
            ...lecture
        }
    })
}

export function findLecture(lectureId: number) {
    return prisma.lecture.findFirst({
        where: {
            id: lectureId
        }
    })
}

export function findLectures() {
    return prisma.lecture.findMany()
}

export function deleteLecture(id: number) {
    return prisma.lecture.delete({
        where: {
            id
        }
    })
}