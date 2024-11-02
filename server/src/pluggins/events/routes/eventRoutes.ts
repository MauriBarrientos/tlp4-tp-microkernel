import { Router } from "express";
import { EventController } from "../controllers/eventController";

const EventRouter = Router();
const eventController = new EventController();

EventRouter.get('/events', eventController.getEvents);
EventRouter.get('/event/:id', eventController.getEventWithTickets);
EventRouter.post('/event', eventController.createEventWithTickets);

export default EventRouter;