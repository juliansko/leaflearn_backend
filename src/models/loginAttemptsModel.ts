import {Schema, model} from "mongoose";

export interface LoginInterface {
    userID: Schema.Types.ObjectId;
    failedAttempts: number;
    expireAt: Date;
}

const loginSchema = new Schema<LoginInterface>({
    userID: {type: Schema.Types.ObjectId, required: true},
    failedAttempts: {type: Number, required: true},
    expireAt: {type: Date, required: true},
});

export const LoginModel = model('Login', loginSchema); 