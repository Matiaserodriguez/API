import { Request, Response, NextFunction } from "express"

import { classUUID } from "../../randomUUID";


export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    const uniqueRequestID = req.get('unique-id');
    const uniqueID = classUUID.getUUID();

    if (uniqueID === uniqueRequestID){
        classUUID.removeUUID();
        next();
    } else {
        classUUID.removeUUID();
        res.status(403).json('Forbidden!');
    }
}
