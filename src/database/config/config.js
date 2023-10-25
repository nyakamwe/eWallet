
require("@babel/register");

require('dotenv').config();

module.exports = {
      development: {
        use_env_variable: 'DATABASE_URL',
        "username": process.env.DEV_DB_USERNAME,
        "password": process.env.DEV_DB_PASSWORD,
        "database": process.env.DEV_DB_NAME,
        "host": process.env.DEV_DB_HOST,
        "dialect": "postgres" // mysql
      },
      production: {
        use_env_variable: 'PROD_URL',
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "postgres"
      },
}
