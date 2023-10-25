import { Router } from "express";
import auth from './auth'
import api from './api'

const router = Router()

router.use('/auth', auth)
router.use('/', api)

export default router
