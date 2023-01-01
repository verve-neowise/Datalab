import { loadFromStorage, saveToStorage } from "../base"
import { Auth } from "../models/auth"

const NAME = "auth"

export const storeAuth = (auth: Auth | null) => {
    saveToStorage(NAME, auth)
}

export const loadAuth: () => Auth | null = () => {
    return loadFromStorage<Auth>(NAME)
}