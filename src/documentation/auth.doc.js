/**
 * @openapi
 * 
 * /api/v1/auth/signup:
 *      post:
 *          tags: [Auth]
 *          summary: Helps to create new customer
 *          description: Create new Customer
 *          requestBody:
 *              description: Provide Customer Info
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              firstName:
 *                                  type: string
 *                              lastName:
 *                                  type: string
 *                              email:
 *                                  type: string
 *                              password:
 *                                  type: string
 *          responses:
 *                  201: 
 *                     description: New customer created successfully!
 *                  400:
 *                     description: Bad Request
 * 
 * /api/v1/customers:
 *      get:
 *          tags: [Customers]
 *          description: Helps to list all customers
 *          summary: List of all customers
 *          responses:
 *                  200:
 *                     description: Customers Retrieved successfully!
 */