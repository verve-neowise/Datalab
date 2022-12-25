import { Router } from 'express'

import { requireAuth, requireAdmin } from '../../middlewares/authorization'
import { body } from '../../middlewares/validator'

import addLecture, { LectureSchema } from './add-lecture'
import getLectures from './get-lectures'

const router = Router()

router.get('/', requireAuth(), getLectures)
router.post('/', requireAdmin(), body(LectureSchema), addLecture)

export default router