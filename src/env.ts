import dotenv from 'dotenv';


interface IEnvrionmentalVariables {
    port: number,
    secret_key: string,
    mongo_str: string,
    secret_route: string
}

function getEnvVar(): IEnvrionmentalVariables {
    dotenv.config()
    const envVarObj: IEnvrionmentalVariables = {
        port: Number(process.env.PORT) || 3000,
        secret_key: process.env.SECRET_KEY || 'tokentest',
        mongo_str: process.env.MONGODB || 'mongodb://localhost:27017/users',
        secret_route: process.env.SECRET_ROUTE || 'secretRoute',
    }
    return envVarObj;
}

export const environmentalVariables = getEnvVar();