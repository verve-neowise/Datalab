import axios from "axios"
import { url, wrapResponse } from "../base"

export type LoginParams = {
    username: string,
    password: string
}

export type RegisterParams = {
    name: string,
    group: string,
    username: string,
    password: string
}

export default class AuthService {

    static login(params: LoginParams) {
        return wrapResponse(
            axios.post(url('/auth/login'), params)
        )
    }

    static register(params: RegisterParams) {
        return wrapResponse(
            axios.post(url('/auth/register'), params)
        )
    }
}