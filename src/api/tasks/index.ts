import { Router } from 'express'

import { requireAuth, requireAdmin } from '../../middlewares/authorization'
import { body } from '../../middlewares/validator'
import addTask from './add-task'
import deleteTask from './delete-task'
import getTaskDetails from './get-task-details'
import getTasks from './get-tasks'
import updateTask from './update-task'

const router = Router()

router.get('/:lid', requireAuth(), getTasks)
router.get('/:lecture/:id', requireAuth(), getTaskDetails)
router.post('/:lecture', requireAdmin(),  addTask)
router.put('/:lecture/:id', requireAdmin(), updateTask)
router.delete('/:lecture/:id', requireAdmin(),  deleteTask)

export default router