import mongoose from "mongoose";
import {environmentalVariables} from './env';


async function connectDB() {
    try{
        const db = await mongoose.connect(environmentalVariables.mongo_str)
        console.log('Connected to MONGODB')
    } catch (err) {
        console.log(err)
    }
}

connectDB()