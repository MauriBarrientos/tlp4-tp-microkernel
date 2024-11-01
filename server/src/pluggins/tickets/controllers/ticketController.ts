import { Request, Response } from "express";
import { TicketService } from "../services/ticketService";

const ticketService = new TicketService();

export class TicketController {
  public async sellTicket(req: Request, res: Response) {
    try {
      const eventId = Number(req.params.id);
      const ticketsPurchased = Number(req.body.ticketsPurchased);
      const paymentMethod = req.body.paymentMethod || "";

      if (!eventId || !ticketsPurchased) {
         res
          .status(400)
          .json({ message: "Todos los campos son obligatorios" });
      }

      const ticket = await ticketService.sellTicket({
        eventId,
        ticketsPurchased,
        paymentMethod,
      });

       res.status(200).json(ticket);
    } catch (error: unknown) {
      if (error instanceof Error) {
         res.status(400).json({ message: error.message });
      } else {
         res
          .status(500)
          .json({ message: "Error al vender el ticket: Error desconocido" });
      }
    }
  }
}

