import { BaseResponse } from "../base";

export interface Auth extends BaseResponse {
    user: {
        id: number,
        name: string,
        group: string,
        username: string,
        token: string,
        isAdmin: boolean
    }
}