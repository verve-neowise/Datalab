import chalk from "chalk";
import { NextFunction, Request, Response } from "express";

export type UserDetails = {
    id: number
    username: string
    password: string
    name: string
    isAdmin: boolean
    token: string
}

export type UserDetailsProvider = (token: string) => Promise<UserDetails | null>

const authorization = (adminRequired: boolean, provideUser: UserDetailsProvider) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        const token = req.header('Authorization')

        if (!token) {
            return res.status(401).json({
                message: "Token not provided"
            })
        }

        const user = await provideUser(token)
    
        if (!user) {
            return res.status(401).json({
                message: "Invalid access token"
            })
        }

        if (!user.isAdmin && adminRequired) {
            return res.status(403).json({
                message: "Access denied for resource " + req.originalUrl
            })
        }

        res.locals.user = user

        console.log((user.isAdmin ? chalk.blueBright('ADMIN ') : "") + chalk.bold(user.username));

        next()
    }
}

export const requireAuth = (provideUser: UserDetailsProvider) => authorization(false, provideUser)
export const requireAdmin = (provideUser: UserDetailsProvider) => authorization(true, provideUser)