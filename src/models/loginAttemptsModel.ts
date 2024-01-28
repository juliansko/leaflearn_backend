import {Schema, model} from "mongoose";

export interface LoginInterface {
    userID: string;
    failedAttempts: number;
    expireAt: Date;
}

const loginSchema = new Schema<LoginInterface>({
    userID: {type: String, required: true},
    failedAttempts: {type: Number, required: true},
    expireAt: {type: Date, required: true},
});

export const LoginModel = model('Login', loginSchema); 