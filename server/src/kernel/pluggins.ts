// src/kernel/plugins.ts

import { Express } from "express";
import EventRouter from "../pluggins/events/routes/eventRoutes";
import ticketRouter from "../pluggins/tickets/routes/ticketRoutes";
import discountRouter from "../pluggins/discount/routes/discountRoutes";
import { DiscountService } from "../pluggins/discount/services/discountService";
import { TicketService } from "../pluggins/tickets/services/ticketService";

export let isDiscountPluginEnabled = false; // Cambia esto para activar/desactivar el plugin de descuentos

// Crea el servicio de descuento solo si el plugin está habilitado
const discountService = isDiscountPluginEnabled ? new DiscountService() : undefined;
export const ticketService = new TicketService(discountService);

export function loadPluggins(app: Express): void {
    app.use('/api', EventRouter);
    app.use('/api', ticketRouter);

    if (isDiscountPluginEnabled) {
        app.use('/api', discountRouter);
        console.log("Plugin de descuentos activado.");
    } else {
        console.log("Plugin de descuentos desactivado.");
    }
}
