import { Express } from "express";
import EventRouter from "../pluggins/events/routes/eventRoutes";


export function loadPluggins(app: Express): void {
    app.use('/api', EventRouter);
};