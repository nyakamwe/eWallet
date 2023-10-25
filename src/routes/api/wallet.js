import { Router } from "express";
import WalletController from "../../controllers/walletController";
import { verifyToken } from "../../middlewares";

const router = Router()

router.post('/', verifyToken, WalletController.createCustomerWallet)
router.get('/', verifyToken, WalletController.readCustomerWallet)

export default router
