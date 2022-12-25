import { User } from "@prisma/client"

export class UserDto {
    readonly username: string = ""
    readonly password: string = ""
    readonly name: string = ""
    readonly group: string = ""
}

export class UserResponse {
    
    readonly id: number
    readonly name: string
    readonly group: string
    readonly username: string 
    readonly token: string
    readonly isAdmin: boolean

    constructor(
        user: User      
    ) {
        this.id = user.id
        this.name = user.name
        this.group = user.group
        this.username = user.username
        this.token = user.token
        this.isAdmin = user.isAdmin        
    }
}