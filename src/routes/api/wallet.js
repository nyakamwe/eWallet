import { Router } from "express";
import WalletController from "../../controllers/walletController";
import { verifyToken } from "../../middlewares";

const router = Router()

router.post('/', verifyToken, WalletController.createCustomerWallet)
router.get('/', verifyToken, WalletController.readCustomerWallet)
router.patch('/topup', verifyToken, WalletController.topUpWallet)
router.get('/transactions', verifyToken, WalletController.walletTransactions)

export default router
