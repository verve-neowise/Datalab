import { NextFunction, Request, Response } from "express"
import { Schema } from "../../middlewares/validator"
import { UserDto, UserResponse } from "../../models/user"
import { createUser, findUser } from "../../services/user.service"

export const RegisterSchema: Schema = {
    username: "string",
    password: "string",
    name: "string",
    group: "string"
}

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userDto: UserDto = req.body

        const user = await findUser(userDto.username)
    
        if (user) {
            return res.status(403).json({
                message: `Username ${userDto.username} already taken`
            })
        }
    
        const newUser = await createUser(userDto)
    
        res.status(200).json({
            message: "User created",
            user: new UserResponse(newUser)
        })    
    }
    catch(err: any) {
        next(err)
    }
}