import { Request, Response } from "express";
import { TicketService } from "../../tickets/services/ticketService";
import { DiscountService } from "../services/discountService";

const discountService = new DiscountService();
const ticketService = new TicketService(discountService);

export class DiscountController {
    public async applyDiscount(req: Request, res: Response): Promise<void> {
        try {
            const eventId = Number(req.params.eventId);
            const ticketsPurchased = Number(req.body.ticketsPurchased);
            const paymentMethod = req.body.paymentMethod;
            const discountPercentage = Number(req.body.discountPercentage);

            if (!eventId || !ticketsPurchased || !paymentMethod || isNaN(discountPercentage)) {
                res.status(400).json({ message: "Todos los campos son obligatorios" });
            }

            const ticket = await ticketService.sellTicket({
                eventId,
                ticketsPurchased,
                paymentMethod,
                discountPercentage,
            });

            res.status(201).json(ticket);
        } catch (error) {
            res.status(500).json({ message: error instanceof Error ? error.message : "Error desconocido" });
        }
    };
};