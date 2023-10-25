/**
 * @openapi
 * 
 * /api/v1/wallet:
 *      post:
 *          tags: [Wallet]
 *          security:
 *              - BearerToken: []
 *          summary: Helps logged in customer to create a wallet
 *          description: Create Customer wallet
 *          responses:
 *                  201: 
 *                     description: New wallet created successfully!
 *                  400:
 *                     description: Bad Request
 *      get:
 *          tags: [Wallet]
 *          security:
 *              - BearerToken: []
 *          summary: Helps logged in customer to read a wallet
 *          description: Read Customer wallet
 *          responses:
 *                  200: 
 *                     description: Wallet retrieved successfully!
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Wallet not found!
 * 
 * /api/v1/wallet/topup:
 *      patch:
 *           tags: [Wallet]
 *           security:
 *              - BearerToken: []
 *           summary: Helps logged in customer to update a wallet balance
 *           description: Read Customer wallet
 *           requestBody:
 *              description: Provide amount
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              amount:
 *                                  type: integer
 *           responses:
 *                   200: 
 *                      description: Wallet balance updated successfully!
 *                   400:
 *                      description: Bad Request
 *                   404:
 *                      description: Wallet not found!
 * 
 * /api/v1/wallet/transactions:
 *      get:
 *          tags: [Wallet]
 *          security:
 *              - BearerToken: []
 *          summary: Helps logged in customer to read wallet transactions
 *          description: Read Customer wallet transactions
 *          responses:
 *                  200: 
 *                     description: Wallet transactions retrieved successfully!
 *                  400:
 *                     description: Bad Request
 *                  404:
 *                     description: Wallet not found!
 * 
 */