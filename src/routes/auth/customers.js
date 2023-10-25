import { Router } from "express";
import CustomersControllers from "../../controllers/customersController";

const customerRouter = Router()

customerRouter.post('/signup', CustomersControllers.registerCustomer)

export default customerRouter