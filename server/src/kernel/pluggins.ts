import { Express } from "express";
import EventRouter from "../pluggins/events/routes/eventRoutes";
import ticketRouter from "../pluggins/tickets/routes/ticketRoutes";


export function loadPluggins(app: Express): void {
    app.use('/api', EventRouter, ticketRouter);
};