import { Router } from "express";
import CustomersControllers from "../../controllers/customersController";

const router = Router()

router.get('/customers', CustomersControllers.customersList)

export default router
