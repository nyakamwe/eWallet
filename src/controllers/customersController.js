import { FindAll, Create, FindOne } from "../database/queries"
import * as helper from '../helpers'

export default class AuthControllers{
    /**
     * @description user signup function
     * @param {*} req Request from user
     * @param {*} res Response from server
     */
    static async registerCustomer(req, res){
        try {
            const requiredAttributes = ['firstName', 'lastName', 'email', 'password']
            const data = req.body

            const missingFields = requiredAttributes.filter(attr => {
                const value = data[attr]
                return !value || value.trim() === ''
            })

            if (!missingFields.length){
                const { password } = data
                // hash password
                const hashedPassword = helper.password.hash(password)
                data.password = hashedPassword

                const newCustomer = await Create('Customer', data)
                return res.status(201).json({
                    message: "New customer created!", 
                    response: newCustomer
                })

            }else{
                return res.status(400).json({ 
                    error: `Missing required fields: ${missingFields.join(', ')}` 
                })
            }
            
        } catch (error) {
            return res.status(500).json({ 
                error: error.message 
            })
        }
    }

    static async customersList(req, res){
        const { response: customers } = await FindAll('Customer')
        return res.status(200).json({
            message: "Customers List",
            response: customers
        })
    }

    static async customerDetails(req, res){
        const { customerId } = req.params

        const condition = {
            id: customerId
        }

        const customer = await FindOne('Customer', condition)
        if (!Object.keys(customer).length){
            return res.status(404).json({
                error: "Customer Details not found or Try again!",
            })
        }
        return res.status(200).json({
            message: "Customer Details",
            response: customer
        })
        
    }
}
