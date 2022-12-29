import { Application } from "../application";
import api from './api'

export default (application: Application) => {

    application.server.use('/api', api)

    application.onStart(() => {
        console.log('apply core module')
    })
}