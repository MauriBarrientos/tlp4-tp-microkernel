import { TicketModel } from "../models/ticketsModel";
import { Transaction } from "sequelize";


export class TicketService {

    public async sellTicket(ticketId: number, quantity: number): Promise<TicketModel> {

        const transaction: Transaction | undefined = await TicketModel.sequelize?.transaction();
        if (!transaction) {
            throw new Error("No se pudo iniciar la transacción");
        };
        try {
            const ticket = await TicketModel.findOne({
                where: { id: ticketId },
                attributes: ["id", "totalSeats", "seatsOccupied", "price"],
                transaction,
            }); 
            if (!ticket) {
                throw new Error("Ticket no encontrado");
            }

            // Verifica si hay suficientes asientos disponibles
            const availableSeats = ticket.totalSeats - ticket.seatsOccupied;
            if (quantity > availableSeats) {
                throw new Error("No hay suficientes asientos disponibles");
            }

            // Actualiza la cantidad de asientos ocupados
            ticket.seatsOccupied += quantity;
            await ticket.save({ transaction });

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