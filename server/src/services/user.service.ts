import { UserDto } from "../models/user";
import { prisma } from "./client";
import md5 from 'md5'

export async function findUser(username: string) {
    return prisma.user.findFirst({
        where: {
            username
        }
    })
}

export async function findUserByToken(token: string) {
    return prisma.user.findFirst({
        where: {
            token
        }
    })
}

export async function createUser(user: UserDto) {
    return prisma.user.create({
        data: {
            username: user.username,
            password: user.password,
            group: user.group,
            name: user.name,
            token: md5(user.username + user.password)
        }
    })
}