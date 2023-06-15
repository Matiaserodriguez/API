import { environmentalVariables } from "../../env";
import { Request, Response, NextFunction } from "express"
import jwt from 'jsonwebtoken'


export const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('authorization')?.replace('Bearer ', '');
    if(!token) return res.status(401).json('Access Denied');

    let payload;
    try {
        payload = jwt.verify(token, environmentalVariables.secret_key);
    } catch (e){
        res.status(401).json('Invalid Token');
    }

    next();
}