import { Request, Response, NextFunction } from "express"
import chalk from "chalk"
import moment from "moment"

export default () => {

    return async (err: Error, req: Request, res: Response, next: NextFunction) => {
        const time: string = moment(new Date()).format('DD-MM-YY HH:MM')
        const method: string = req.method
        const url: string = req.originalUrl

        printHead(time, method, url)
        printError(err)       
    }
}

function printHead(time: string, method: string, url: string) {
    console.log(`[${chalk.gray(time)}] ${chalk.redBright(method)} ${chalk.red(url)}`)
}

function printError(error: any) {
    console.log(chalk.blackBright(error.toString()))
}