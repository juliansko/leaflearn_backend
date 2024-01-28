import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { config } from 'dotenv';

import { UserModel } from "../models/userModel";
import { failedLoginAttempt, isLocked, succesfulLoginAttempt } from './accountLockService';

config();

export async function authService(email: string, password: string) {
    // Tries to find user with given mail
    const user = await UserModel.findOne({ email: email });
    // Throws error if user not found
    if (!user) {
        throw new Error("Login failed");
    }
    let locked = await isLocked(user._id);
    if (locked.isLocked) {
        throw new Error("Account is locked for 5 minutes");
    }

    // hashes password and compares it to the one in the database
    const success = await compare(password, user.password);
    if (success) {
        await succesfulLoginAttempt(user._id);
        let userData = user.toJSON();
        userData["password"] = 'hidden';
        // if passwords match, a token is created and returned
        const secretKey = process.env.JWT_SECRET_KEY!;
        const signData = {
            email: user.email,
            role: user.role,
            id: user._id,
        };

        const token = sign(signData, secretKey, { expiresIn: '2h'});
        return { token: token, user: userData };
    } else {
        await failedLoginAttempt(user._id);
        throw new Error("Login failed");
    }

}