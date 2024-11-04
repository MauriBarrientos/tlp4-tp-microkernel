import { Express } from "express";
import EventRouter from "../pluggins/events/routes/eventRoutes";
import ticketRouter from "../pluggins/tickets/routes/ticketRoutes";
import reservaRouter from "../pluggins/reservas/routes/reservaRoutes";
import discountRouter from "../pluggins/discounts/routes/discountRoutes";


export function loadPluggins(app: Express): void {
    app.use('/api', EventRouter);
    app.use('/api', ticketRouter);
    app.use('/api', reservaRouter)
    app.use('/api', discountRouter)
};