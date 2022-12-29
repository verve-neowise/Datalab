import { Router } from "express";

// middlewares
import errorHandler from "../../common/middlewares/error-handler";
import requestLogger from "../../common/middlewares/request-logger";

// api features
import auth from './auth'
import lectures from "./lectures";
import tasks from './tasks'
import code from './code'
import account from './account'

const router = Router()

router.use(requestLogger())

router.use('/auth', auth)
router.use('/lectures', lectures)
router.use('/tasks', tasks)
router.use('/code', code)
router.use('/account', account)

router.use(errorHandler())

export default router