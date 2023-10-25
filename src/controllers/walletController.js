import { FindAll, Create, FindOne } from "../database/queries"
import * as helper from '../helpers'


export default class WalletController{
    /**
     * @description user signup function
     * @param {*} req Request from user
     * @param {*} res Response from server
     */
    static async createCustomerWallet(req, res){
        try {
            const user = req.user
            const wallet = req.wallet

            if (Object.keys(wallet).length){
                return res.status(409).json({
                    error: "You already have a wallet!", 
                }) 
            }else{
                const data = {
                    customerId: user.id
                }
                const newWallet = await Create('Wallet', data)
                return res.status(201).json({
                    message: "New wallet created!", 
                    response: newWallet,
                })
            }
            
        } catch (error) {
            return res.status(500).json({ 
                error: error.message 
            })
        }
    }

    static async readCustomerWallet(req, res){
        try {
            const user = req.user
            
            const condition = {
                customerId: user.id
            }

            const wallet = await FindOne('Wallet', condition)
            if (!Object.keys(wallet).length){
                return res.status(404).json({
                    error: "No wallet found at this moment, Please create a wallet!", 
                }) 
            }
            return res.status(200).json({ 
                message: "Customer Wallet",
                response: wallet
            })
            
        } catch (error) {
            return res.status(500).json({ 
                error: error.message 
            })
        }
    }
}
