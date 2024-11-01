import { Request, Response } from 'express';
import { EventService } from '../services/eventService';


const EventServices = new EventService();

export class EventController {
    // Método para obtener un evento con sus boletos, total de asientos y precios
    public async getEventWithTickets(req: Request, res: Response) {
        try {
            const eventId = parseInt(req.params.id);

            const event = await EventServices.getEventWithTickets(eventId);

            res.status(200).json(event);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ message: `Error al obtener el evento: ${error.message}` });
            } else {
                res.status(400).json({ message: "Error al obtener el evento: Error desconocido" });
            };
        };
    };

    // Método para crear un evento con boletos asociados
    public async createEventWithTickets(req: Request, res: Response) {
        
        const { name, description, date, location, totalSeats, price } = req.body;

        try {
            const newEvent = await EventServices.createEventWithTickets({ name, description, date, location, totalSeats, price });

            res.status(201).json(newEvent);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(400).json({ message: `Error al crear el evento: ${error.message}` });
            } else {
                res.status(400).json({ message: "Error al crear el evento: Error desconocido" });
            };
        };
    };
};