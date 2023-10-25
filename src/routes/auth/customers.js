import { Router } from "express";
import AuthControllers from "../../controllers/customersController";

const customerRouter = Router()

customerRouter.get('/customers', AuthControllers.signup)

export default customerRouter