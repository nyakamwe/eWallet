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
 */