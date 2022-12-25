import chalk from "chalk";
import { NextFunction, Request, Response } from "express";
import { findUserByToken } from "../services/user.service";

const authorization = (adminRequired: boolean = false) => {

    return async (req: Request, res: Response, next: NextFunction) => {

        const token = req.header('Authorization')
    
        if (!token) {
            return res.status(401).json({
                message: "Token not provided"
            })
        }
    
        const user = await findUserByToken(token)
    
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

export const requireAuth = () => authorization()

export const requireAdmin = () => authorization(true)