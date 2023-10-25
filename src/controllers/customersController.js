export default class AuthControllers{
    /**
     * @description user signup function
     * @param {*} req Request from user
     * @param {*} res Response from server
     */
    static async signup(req, res){
        res.send('User signup function')
    }
}
