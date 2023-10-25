import { Router } from "express";
import CustomersControllers from "../../controllers/customersController";

const customerRouter = Router()

customerRouter.post('/signup', CustomersControllers.registerCustomer)
customerRouter.post('/login', CustomersControllers.customerLogin)

export default customerRouter