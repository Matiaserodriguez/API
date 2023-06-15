import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

export const validationSchema = (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(422).json({error: error.details[0].message});
    } else {
      next();
    }
  };
