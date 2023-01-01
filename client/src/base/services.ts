import { AxiosResponse } from "axios"

export const BASE_URL = import.meta.env.VITE_BASE_URL

export const url = (endpoint: string) => `${BASE_URL}${endpoint}`

export const wrapResponse = (promise: Promise<AxiosResponse<any, any>>) => {
    return new Promise<any>((resolve, reject) => {
        promise.then(res => {
            resolve(res.data)
        })
        .catch(res => {
            reject(res.response.data)
        })
    })
}