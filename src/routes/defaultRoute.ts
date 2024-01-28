import { Router } from 'express';

export const defaultRoute = Router();

// Should realistically never be used, but it's here for testing purposes
defaultRoute.get('/', (req, res) => {
    res.send('Hello, TypeScript Express!');
    });