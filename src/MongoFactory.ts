import { IUser } from "./logIn/model/interface/User.interface";
import User from "./logIn/model/Users";


export class MongoDBFactory {
    async saveUser(user: IUser) {
        return await user.save();
    }

    async validateUserPassword(user: IUser, password: string) {
        return await user.validatePassword(password);
    }

    async encryptUserPassword(user: IUser) {
        return await user.encryptPassword(user.password);
    }
    async findOneUser(email: string) {
        return await User.findOne({'email': email});
    }
    
    async findUsers(parameter: {}, filter: {}): Promise<IUser[]> {
        return await User.find(parameter, filter);
    }
}
