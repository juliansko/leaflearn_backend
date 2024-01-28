import { UserInterface, UserModel } from "../models/userModel";

export async function createUser(userData: UserInterface){
    try {
        // creates a new user with the given data
        const user = new UserModel(userData);
        // saves the user to the database
        user.save();
        console.log(user);
        return user;
    } catch (error) {
        console.log("Error creating user: ", error);
        return error;
    }
};