import { Types } from "mongoose";
import { LoginModel } from "../models/loginAttemptsModel";
import { callbackify } from "util";

export async function failedLoginAttempt(user: Types.ObjectId) {
    const login = await LoginModel.findOne({userID: user});
    if (!login) {
        const login = new LoginModel({
            userID: user,
            failedAttempts: 1,
            expireAt: new Date(Date.now() + 5*60000),
        });
        await login.save();
    } else {
        login.failedAttempts++;
        login.expireAt = new Date(Date.now() + 5*60000);
        await login.save();
    }
        console.log("unsuccessful login, logged login attempts");
        return login;
}

export async function succesfulLoginAttempt(user: Types.ObjectId) {
    const login = await LoginModel.findOne({userID: user});
    if(login) {
        await LoginModel.deleteOne({userID: user});
        console.log("deleted login attempts, succesful login");
    }
    return "succesful login";
}

export async function isLocked(user: Types.ObjectId) {
    const login = await LoginModel.findOne({userID: user});
    if(login && login.failedAttempts > 4) {
        console.log(`user ${user} is locked until ${login.expireAt}`)
        let untilDate: Date = new Date(login.expireAt);
        let until: Number = Math.floor(untilDate.getTime() - new Date().getTime() / (1000 * 60))
        return {
            isLocked: true,
            until: until,
        };
    } else {
        return {
            isLocked: false,
            until: 0,
        };
    }
}