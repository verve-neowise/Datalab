import { Router } from 'express'

import { requireAuth, requireAdmin } from '../../middlewares/authorization'
import addTask from './add-task'
import deleteTask from './delete-task'
import getTaskDetails from './get-task-details'
import getTasks from './get-tasks'
import updateTask from './update-task'

const router = Router()

router.get('/', requireAuth(), getTasks)
router.get('/:id', requireAuth(), getTaskDetails)

router.post('/', requireAdmin(),  addTask)

router.put('/:id', requireAdmin(), updateTask)
router.delete('/:id', requireAdmin(),  deleteTask)

export default router