import { TicketModel } from "../models/ticketsModel";
import { EventModel } from "../../events/models/eventModel";
import { Transaction } from "sequelize";

interface TicketData {
    eventId: number;
    ticketsPurchased: number;
};

export class TicketService {

    public async sellTicket(ticketData: TicketData) {

        const { eventId, ticketsPurchased } = ticketData;

        const transaction: Transaction | undefined = await EventModel.sequelize?.transaction();

        try {
            
            if (!transaction) {
                throw new Error("No se pudo iniciar la transacción");
            };

            const event = await EventModel.findByPk(eventId, { transaction });
            if (!event) {
                throw new Error("Evento no encontrado");
            }

            // Verifica si hay suficientes asientos disponibles
            if (!event || event.totalSeats === undefined || event.seatsOccupied === undefined) {
                throw new Error("Datos del evento incompletos");
            }
            const availableSeats = event.totalSeats - event.seatsOccupied;
            if (ticketsPurchased > availableSeats) {
                throw new Error("No hay suficientes asientos disponibles");
            }

            const totalPrice = event.price * ticketsPurchased;
            if (totalPrice === undefined) {
                throw new Error("Datos del evento incompletos");
            }

            const ticket = await TicketModel.create(
                { eventId, ticketsPurchased, price: totalPrice },
                { transaction }
            );
            
            // Actualiza la cantidad de asientos ocupados
            event.seatsOccupied += ticketsPurchased;
            await event.save({ transaction });

            // Confirma la transacción
            await transaction.commit();


            return ticket;

        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error al vender el ticket: ${error.message}`);
            } else {
                throw new Error("Error al vender el ticket: Error desconocido");
            };
        };
    };

};