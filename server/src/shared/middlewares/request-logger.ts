import { Request, Response, NextFunction } from "express"
import chalk from "chalk"
import moment from 'moment'

export default () => {
    return async (req: Request, res: Response, next: NextFunction) => {

        const time: string = moment(new Date()).format('DD-MM-YY HH:MM')
        const method: string = req.method
        const url: string = req.originalUrl

        printHead(time, method, url)

        if (Object.keys(req.body).length > 0) {
            printBody(req.body)
        }

        next()
    }
}

function printHead(time: string, method: string, url: string) {
    console.log(`[${chalk.gray(time)}] ${chalk.green(method)} ${chalk.blue(url)}`)
}

function printBody(body: any) {
    console.log(chalk.bold('Body: '));
    console.log(chalk.blackBright(JSON.stringify(body, undefined, 2)))
}
