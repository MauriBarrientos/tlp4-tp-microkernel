// src/plugins/tickets/controllers/ticketController.ts

import { Request, Response } from "express";
import { ticketService } from "../../../kernel/pluggins";

export class TicketController {
    public async sellTicket(req: Request, res: Response) {
        try {
            const eventId = Number(req.params.id);
            const ticketsPurchased = Number(req.body.ticketsPurchased);
            const discountPercentage = req.body.discountPercentage ? Number(req.body.discountPercentage) : undefined;

            if (!eventId || !ticketsPurchased) {
                res.status(400).json({ message: "Todos los campos son obligatorios" });
                return;
            }

            const ticket = await ticketService.sellTicket({ eventId, ticketsPurchased, discountPercentage });
            res.status(200).json(ticket);

        } catch (error: unknown) {
            res.status(500).json({ message: error instanceof Error ? error.message : "Error al vender el ticket" });
        }
    }
}
