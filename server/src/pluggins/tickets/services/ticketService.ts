// src/plugins/tickets/services/ticketService.ts

import { TicketModel } from "../models/ticketsModel";
import { EventModel } from "../../events/models/eventModel";
import { DiscountService } from "../../discount/services/discountService";
import { Transaction } from "sequelize";

interface TicketData {
    eventId: number;
    ticketsPurchased: number;
    discountPercentage?: number;
}

export class TicketService {
    private discountService?: DiscountService;

    constructor(discountService?: DiscountService) {
        this.discountService = discountService;
    }

    public async sellTicket({ eventId, ticketsPurchased, discountPercentage }: TicketData) {
        const transaction: Transaction | undefined = await EventModel.sequelize?.transaction();

        try {
            if (!transaction) {
                throw new Error("No se pudo iniciar la transacción");
            }

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

            // Calcula el precio total antes de aplicar descuento
            const baseTicketPrice = event.price; // Usar el precio del evento
            let totalPrice = baseTicketPrice * ticketsPurchased;

            // Aplica el descuento si el servicio y el porcentaje están disponibles
            if (this.discountService && discountPercentage) {
                totalPrice = this.discountService.applyDiscount(totalPrice, discountPercentage);
            }

            // Crea el ticket en la base de datos
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
            if (transaction) {
                await transaction.rollback(); // Asegúrate de revertir la transacción en caso de error
            }
            if (error instanceof Error) {
                throw new Error(`Error al vender el ticket: ${error.message}`);
            } else {
                throw new Error("Error al vender el ticket: Error desconocido");
            }
        }
    }
}
