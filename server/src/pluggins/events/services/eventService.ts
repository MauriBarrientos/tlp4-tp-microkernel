import { EventModel } from "../models/eventModel";
import { TicketModel } from "../../tickets/models/ticketsModel";
import { Transaction } from "sequelize";

interface EventData {
    name: string;
    description: string;
    date: Date;
    location: string;
    totalSeats: number;
    price: number;

};

export class EventService {
    // Método para obtener un evento con sus boletos, total de asientos y precios
    public async getEventWithTickets(eventId: number) {
        try {
            const event = await EventModel.findOne({
                where: { id: eventId },
                attributes: ["id", "name", "description", "date", "location", "totalSeats", "price"],
            });

            if (!event) {
                throw new Error("Evento no encontrado");
            }

            return {
                event,
            };
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error al obtener el evento: ${error.message}`);
            } else {
                throw new Error("Error al obtener el evento: Error desconocido");
            };
        };
    };

    // Método para crear un evento con boletos asociados
    public async createEventWithTickets(eventData: EventData) {
        const { name, description, date, location, totalSeats, price } = eventData;

        // Inicia una transacción para asegurar la integridad de los datos
        const transaction: Transaction | undefined = await EventModel.sequelize?.transaction();

        try {
            if (!transaction) {
                throw new Error("No se pudo iniciar la transacción");
            }

            // Crea el evento
            const event = await EventModel.create(
                { name, description, date, location, totalSeats, price },
                { transaction }
            );

            // Confirma la transacción
            await transaction?.commit();

            return event;
        } catch (error: unknown) {
            // En caso de error, revierte la transacción
            await transaction?.rollback();
            if (error instanceof Error) {
                throw new Error(`Error al obtener el evento: ${error.message}`);
            } else {
                throw new Error("Error al obtener el evento: Error desconocido");
            };
        };
    };

};