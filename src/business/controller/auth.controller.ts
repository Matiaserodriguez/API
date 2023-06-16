import { Request, Response } from "express";
import { IUser } from "../../logIn/model/interface/User.interface";
import { MongoDBFactory } from '../../MongoFactory'


const MONGO = new MongoDBFactory();

export const listUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await MONGO.findUsers({}, { _id: 0, password: 0, __v: 0 });
    if (!users) {
        console.error('Error al hacer retrieve de users');
        res.status(400).json('There was an error, try again later');
    } else {
        console.log(users);
        res.send(users);
    }
}
