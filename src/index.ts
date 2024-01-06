// Imports 
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();

// Config for api
dotenv.config();
app.use(cors());
app.use(express.json());

// Variable Declaration
const PORT = process.env.PORT || 8000;

// Routes
app.get('/', (request:Request, response:Response) => {
    response.send("<h1>Hello ! Welcome To Server.</h1>")
})

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})