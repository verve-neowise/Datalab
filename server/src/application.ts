import express from 'express'

type Function = () => void
type Module = (app: Application) => void

export class Application {

    private prepareFunctions: Function[] = []
    private startFunctions: Function[] = []

    constructor(
        public readonly port: number,
        public readonly server: express.Express
    ) {}

    onPrepare(callback: Function) {
        this.prepareFunctions.push(callback)
    }

    onStart(callback: Function) {
        this.startFunctions.push(callback)
    }

    apply(execute: Module) {
        execute(this)
    }

    start() {
        console.log('Preparing...');
        this.prepareFunctions.forEach(func => func())

        this.server.listen(this.port, () => {
            console.log('Start server on port ' + this.port);
            this.startFunctions.forEach(func => func())
        })
    }
}