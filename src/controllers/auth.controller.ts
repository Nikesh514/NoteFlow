import { Request, Response } from 'express';
import { hash } from "../utils/bcrypt.utils"
import CustomError from '../middleware/errorhandler.middleware';
import User from '../models/user.model';

export const register = async (req: Request, res:Response) => {
    const { full_name,email,password } = req.body;

    if (!password) {
        throw new CustomError("Password is required",400);
    }

    // check if user exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        throw new CustomError("User already exists with provided email", 400);
    }

    const hashPassword = await hash(password)
    
    // creating new user
    const user = await User.create({
        email,
        full_name,
        password: hashPassword
    })

    res.status(201).json({
        message: "User Registered Successfully",
        user: {
            id: user._id,
            full_name: user.full_name,
            email: user.email
        }
    })
}

export const login   = async (req: Request, res:Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
        throw new CustomError("Email and password are required", 400)
    }

    res.json({
        message: "Login successful"
    })
}