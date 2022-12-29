import { Router } from 'express'
import { body } from '../../../common/middlewares/validator'
import login, { LoginSchema } from './login'
import register, { RegisterSchema } from './register'

const router = Router()

router.post('/login', body(LoginSchema), login)
router.post('/register', body(RegisterSchema), register)

export default router