import { Request, Response } from 'express';
import { hash } from "../utils/bcrypt.utils"

export const register = async (req: Request, res:Response) => {
    const { full_name,email,password } = req.body;

    if (!password) {
        throw new Error("Password is required",);
    }

    const hashPassword = await hash(password)
    
}