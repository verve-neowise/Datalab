import { Router } from "express";

// middlewares
import errorHandler from "../middlewares/error-handler";
import requestLogger from "../middlewares/request-logger";

// api features
import auth from './auth'
import lectures from "./lectures";
import tasks from './tasks'

const router = Router()

router.use(requestLogger())

router.use('/auth', auth)
router.use('/lectures', lectures)
router.use('/tasks', tasks)

router.use(errorHandler())

export default router