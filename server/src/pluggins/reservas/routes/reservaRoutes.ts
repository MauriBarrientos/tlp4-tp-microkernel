import { Router } from "express";
import { ReservationController } from "../controllers/reservaController";

const reservationController = new ReservationController();
const reservaRouter = Router();

reservaRouter.post("/reserva/:id", reservationController.reserveTicket);
reservaRouter.put("/finalize/:ticketId", reservationController.finalizeReservation);

export default reservaRouter;