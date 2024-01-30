import { Router } from "express";

export const coursesRoute = Router();

coursesRoute.post('/courses', async (req, res) => {
    try{
        
    } catch (error) {
        if (error instanceof Error) {
            res.status(401).send(error.message);
        } else {
            res.status(500).send('An unknown error occurred');
        }
    }
});