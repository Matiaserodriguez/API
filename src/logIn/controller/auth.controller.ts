import jwt from 'jsonwebtoken';
import axios from 'axios';

import { Request, Response } from "express";
import User from "../model/Users";
import { IUser } from '../model/interface/User.interface'
import { environmentalVariables as ENV } from '../../env'
import { classUUID } from '../../randomUUID';
import { Error } from 'mongoose';
import { MongoDBFactory } from '../../MongoFactory'


const MONGO = new MongoDBFactory();

export const signup = async (req: Request, res: Response) => {
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try{
        user.password = await MONGO.encryptUserPassword(user);
        const userSaved = await MONGO.saveUser(user);
        console.log('userSaved');
        console.log(userSaved);
        const returnCreation =  {
            username: userSaved.username,
            email: userSaved.email,
        }
        res.json({"UserCreated": returnCreation});
    } catch(error: Error | any) {
        console.log(error);
        res.status(409).json({'error': error.message});
    }
}

export const signin = async (req: Request, res: Response) => {
    const user = await MONGO.findOneUser(req.body.email);
    if(user) {
        const correctPassword: boolean = await MONGO.validateUserPassword(user, req.body.password);
        if (!correctPassword) return res.status(400).json('Email or password incorrect');
        const token = jwt.sign({_id: user._id}, ENV.secret_key, {
        // expires in 1 hour
        expiresIn: 60 * 60}
        )
        res.json({'JWT': token});
    } else {
        res.status(404).json('Bad Request');
    }
}

export const list = async (req: Request, res: Response) => {
    try {
        const newUUID = classUUID.generateUUID();
        const config = {
            headers:{
              'unique-id': newUUID,
            }
        };
        const response = await axios.get(`http://localhost:${ENV.port}/api/${ENV.secret_route}`, config);
        console.log(response.data);
        res.send(response.data)
      } catch (error) {
        console.error(error);
        res.status(404).json('Bad Request')
      }
}
