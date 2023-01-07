import { Router } from 'express'

import { requireAuth, requireAdmin } from '../../middlewares/authorization'
import { body } from '../../../shared/middlewares/validator'

import addLecture, { LectureSchema } from './add-lecture'
import getLectures from './get-lectures'
import updateLecture from './update-lecture'
import getLecture from './get-lecture'
import deleteLecture from './delete-lecture'

const router = Router()

router.get('/', requireAuth(), getLectures)
router.get('/:id', requireAuth(), getLecture)
router.post('/', requireAdmin(), body(LectureSchema), addLecture)
router.put('/:id', requireAdmin(), body(LectureSchema), updateLecture)
router.delete('/:id', requireAdmin(), deleteLecture)

export default router