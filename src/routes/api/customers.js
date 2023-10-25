import { Router } from "express";
import CustomersControllers from "../../controllers/customersController";

const router = Router()

router.get('/customers', CustomersControllers.customersList)
router.get('/customers/:customerId', CustomersControllers.customerDetails)

export default router
