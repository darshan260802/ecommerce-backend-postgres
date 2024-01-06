// Imports 
import express, { Request, Response } from 'express';
import {Sequelize} from 'sequelize';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();

// Config for api
dotenv.config();
app.use(cors());
app.use(express.json());
export const sequelize = new Sequelize('ecommerce','darshan','123',{
    host:'localhost',
    dialect:'postgres',
    logging: false
})
sequelize.authenticate().then(()=>{
    console.log("connected successfully")
}).catch((err)=>{
    console.log(err)
})
// sequelize.sync({force:true})


// Variable Declaration
const PORT = process.env.PORT || 8000;

// Routes
app.get('/', (request:Request, response:Response) => {
    response.send("<h1>Hello ! Welcome To Server.</h1>")
})

// Users Routes
app.use('/user', require('./routes/users'));

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})