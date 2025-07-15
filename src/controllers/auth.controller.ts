import { Request, Response } from 'express';
import { hash } from "../utils/bcrypt.utils"
import CustomError from '../middleware/errorhandler.middleware';
import User from '../models/user.model';

export const register = async (req: Request, res:Response) => {
    const { full_name,email,password } = req.body;

    if (!password) {
        throw new CustomError("Password is required",400);
    }

    const hashPassword = await hash(password)
    
    // creating new user
    const user = await User.create({
        email,
        full_name,
        password: hashPassword
    })
}