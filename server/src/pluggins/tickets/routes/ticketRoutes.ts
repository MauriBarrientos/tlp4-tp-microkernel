import { Router } from "express";
import { TicketController } from "../controllers/ticketController";

const ticketController = new TicketController();
const ticketRouter = Router();

ticketRouter.post('/sell/:id', ticketController.sellTicket);
ticketRouter.get('/tickets', ticketController.getTickets);


export default ticketRouter;