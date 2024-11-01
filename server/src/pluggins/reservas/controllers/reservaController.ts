import { Request, Response } from "express";
import { ReservationService } from "../services/reservaService";

const reservationService = new ReservationService();

export class ReservationController {
  public async reserveTicket(req: Request, res: Response) {
    try {
      const ticketId = Number(req.params.ticketId);
      const quantity = Number(req.body.quantity);

      if (!ticketId || !quantity) {
        res.status(400).json({ message: "Todos los campos son obligatorios" });
        return;
      }

      const reservation = await reservationService.reserveTicket(
        ticketId,
        quantity
      );
      res.status(200).json(reservation);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({ message: "Error al reservar el ticket: Error desconocido" });
      }
    }
  }

  public async finalizeReservation(req: Request, res: Response) {
    try {
      const ticketId = Number(req.params.ticketId);
      const paymentMethod = req.body.paymentMethod;

      if (!ticketId || !paymentMethod) {
        res.status(400).json({ message: "Todos los campos son obligatorios" });
        return;
      }

      const finalizedReservation = await reservationService.finalizeReservation(
        ticketId,
        paymentMethod
      );
      res.status(200).json(finalizedReservation);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res
          .status(500)
          .json({
            message: "Error al finalizar la reserva: Error desconocido",
          });
      }
    }
  }
}
