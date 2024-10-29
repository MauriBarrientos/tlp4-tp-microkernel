import { Request, Response } from "express";
import { TicketService } from "../services/ticketService";


const ticketService = new TicketService();

export class TicketController {

    public async sellTicket(req: Request, res: Response) {
        try {
            const ticketId = Number(req.params.id);
            const quantity = Number(req.body.quantity);

            const ticket = await ticketService.sellTicket(ticketId, quantity);

            res.status(200).json(ticket);

        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message });
            } else {
                res.status(500).json({ message: "Error al vender el ticket: Error desconocido" });
            };
        };
    };

};