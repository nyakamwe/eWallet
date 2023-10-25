import { FindAll, Create } from "../database/queries"
import * as helper from '../helpers'

export default class AuthControllers{
    /**
     * @description user signup function
     * @param {*} req Request from user
     * @param {*} res Response from server
     */
    static async registerCustomer(req, res){
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
            return res.status(201).json(newCustomer)

        }else{
            return res.status(400).json({ 
                error: `Missing required fields: ${missingFields.join(', ')}` 
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
}
