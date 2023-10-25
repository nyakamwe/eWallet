import express from 'express'
import cors from 'cors'
import routes from './routes'
import swaggerUI from 'swagger-ui-express'
import swaggerDocs from "./documentation";
import { sequelize } from "./database/models"

const app = express()

const port = process.env.PORT || 3000
const mode = process.env.NODE_ENV || 'development'

app.use(express.json())
app.use(cors())

//Check DBs connection
if(mode === 'development'){
    sequelize
      .authenticate()
      .then(() => {
        console.log('Development DB Connected!');
      })
      .catch((err) => {
        console.log('Development DB Not Connected!');
        console.log({ Error_Message: err });
      });
  }

  if(mode === 'production'){
    sequelize
      .authenticate()
      .then(() => {
        console.log('Production DB Connected!');
      })
      .catch((err) => {
        console.log('Production DB Not Connected!');
        console.log({ Error_Message: err });
      });
  }

app.use('/api/v1', routes)

// Serve API Documentation
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

app.listen(port, ()=> {
    console.log(`Server is up and running on ${port}`)
    console.log('press ctrl + c to stop server')
})
