import { Router } from "express";
import { authService } from "../services/authService";

export const authRoute = Router();

authRoute.post('/login', async (req, res) => {
    try {
        // calls the Authentacation Service with the email and password from the request body
        console.log("request");
        console.log(req.body);
        const user = await authService(req.body.email, req.body.password);
        console.log(user);
        res.status(200).send(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(401).send(error.message);
        } else {
            res.status(500).send('An unknown error occurred');
        } 
    }
});