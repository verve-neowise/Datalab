import { NextFunction, Request, Response } from "express"
import { Schema } from "../../../shared/middlewares/validator"
import { UserResponse } from "../../models/user"
import { findUser } from "../../services/user.service"

export const LoginSchema: Schema = {
    username: "string",
    password: "string"
}

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body

        const user = await findUser(username)
    
        if (!user) {
            return res.status(403).json({
                message: `User with username ${username} not found`
            })
        }
    
        if (user.password !== password) {
            return res.status(403).json({
                message: `Wrong username or password`
            })
        }
    
        res.status(200).json({
            message: "User logged",
            user: new UserResponse(user)
        })
    
    }
    catch(err: any) {
        next(err)        
    }
}