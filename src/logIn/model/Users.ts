import mongoose, { Schema, model } from "mongoose";
import { IUser } from "./interface/User.interface";

import bcrypt from 'bcryptjs';


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        min: 4,
        lowecase: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    }
});

userSchema.methods.encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password)
}

export default model<IUser>('User', userSchema);
