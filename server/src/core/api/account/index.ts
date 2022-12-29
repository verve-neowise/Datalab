import { Router } from "express";
import { requireAuth } from '../../middlewares/authorization'
import getAccount from "./get-account";

const router = Router()

router.get('/', requireAuth(), getAccount)

export default router