import * as helper from '../helpers'
import { FindOne } from '../database/queries'

export default async (req, res, next) => {
  const authHeader = req.get('Authorization')
  if (!authHeader) {
    return res.status(403).json({ message: 'No token provided!' })
  }
  const token = authHeader.split(' ')[1]

  if (!token) {
    return res
      .status(401)
      .json({ errors: { authentication: 'Please, login first.' } })
  }

  const decodedToken = helper.token.decode(token)

  if (decodedToken.errors || !decodedToken) {
    return res
      .status(401)
      .json({ error: 'Sorry, we fail to authenticate you.' })
  }
  
  const customer = await FindOne('Customer', { id: decodedToken.id })

  const wallet = await FindOne('Wallet', {
    customerId: customer.id,
  })

  if (customer) {
    delete customer.password
    req.user = customer
    req.body.userId = req.user.id
    req.wallet = wallet

  } else {
    return res
      .status(403)
      .json({ error: 'Sorry, we fail to authenticate you.' })
  }
  return next()
}
