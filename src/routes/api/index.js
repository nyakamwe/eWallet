import { Router } from 'express'
import customers from './customers'

const router = Router()

router.use('/', customers)

export default router
