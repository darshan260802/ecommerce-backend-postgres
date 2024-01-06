import express, { Request, Response } from 'express';
import {User} from '@models/users';
import { Op } from 'sequelize';
const router = express.Router();

// Sync User
User.sync()

// Create User 
router.post('/create', async (request:Request, response:Response) => {
    try {
        const {name, username, email, password} = request.body;

        // Null Checking
        if([name, username, email, password].filter(field => !!!field).length > 0){
            return response.status(400).json({message: 'All fields are required'})
        }

        // Check if user already exists
        const userExists = await User.findOne({where: {[Op.or]: [{username}, {email}]}});
        if(userExists !== null){
            return response.status(400).json({message: 'User already exists'})
        }

        // Create User
        const user = await User.create({name, username, email, password});

        response.status(200).json({
            status: 200,
            message:"User Created Successfully",
            data: user.dataValues
        })

        
    } catch (error) {
        console.log(error);
        response.status(500).json({message: 'Internal Server Error'})
    }

})

module.exports =  router;