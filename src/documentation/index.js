import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Tekana eWallet",
      version: "1.0.0",
      description: "Customers Transfers money worldwide.",
    },
    servers: [
      {
        url: "/",
      },
    ],
    components: {
      securitySchemes: {
        BearerToken: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["src/**/*.doc.js"],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);

export default swaggerDocs;