import { Router } from 'express'

import { requireAuth } from '../../middlewares/authorization'
import { body } from '../../middlewares/validator'

import { CodeSchema } from './run-code'
import reviewCode from './review-code'
import testCode from './test-code'

const router = Router()

router.post('/test', requireAuth(), body(CodeSchema), testCode)
router.post('/review', requireAuth(), body(CodeSchema), reviewCode)

export default router