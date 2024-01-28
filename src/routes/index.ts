import express from 'express';
import { defaultRoute } from './defaultRoute';
import { authRoute } from './authRoute';

export const routes = express.Router();

// collects all routes and exports them
routes.use(defaultRoute);
routes.use(authRoute);