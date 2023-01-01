import { loadAuth } from "../storage/auth.storage"

export const authHeaders = () => {

    const auth = loadAuth()

    return {
        "Authorization": auth?.user.token 
    }
}