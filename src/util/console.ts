export const log = (message: any) => {
    if (process.env.NODE_ENV == "dev") {
        console.log(message)
    }
}