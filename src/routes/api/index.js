import { Router } from 'express'
import customers from './customers'
import wallet from './wallet'

const router = Router()

router.use('/', customers)
router.use('/wallet', wallet)

export default router
