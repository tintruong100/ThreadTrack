import express, { Router } from "express";
import authRoutes from './authRoutes.js';

let router = express.Router();

let initWebRoutes = (app) => {

    app.use('/api/v1/auth', authRoutes);

    return app.use("/", router);
}

export default initWebRoutes;