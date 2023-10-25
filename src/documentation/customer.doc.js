/**
 * @openapi
 * /api/v1/customers:
 *      get:
 *          tags: [Customers]
 *          description: Helps to list all customers
 *          summary: List of all customers
 *          responses:
 *                  200:
 *                     description: Customers Retrieved successfully!
 * 
 * /api/v1/customers/{customerId}:
 *       get:
 *          tags: [Customers]
 *          description: Helps to see customer details
 *          summary: Customer details
 *          parameters:
 *              - name: customerId
 *                in: path
 *                required: true
 * 
 *          responses:
 *                  200:
 *                     description: Customer details found successfully!
 */