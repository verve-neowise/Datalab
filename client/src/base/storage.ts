export const saveToStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const loadFromStorage = <T>(key: string) => {
    const value = localStorage.getItem(key) ?? ''
    
    return value ? JSON.parse(value) as T : null
}