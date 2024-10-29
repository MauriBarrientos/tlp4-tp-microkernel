import { Router } from "express";
import { TicketController } from "../controllers/ticketController";

const ticketController = new TicketController();
const ticketRouter = Router();

ticketRouter.post('/sell/:id', ticketController.sellTicket);


export default ticketRouter;