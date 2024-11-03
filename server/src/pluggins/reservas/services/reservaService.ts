import { TicketModel } from "../../tickets/models/ticketsModel";
import { EventModel } from "../../events/models/eventModel";
import { Transaction } from "sequelize";

interface TicketData {
  eventId: number;
  ticketsPurchased: number;
  paymentMethod?: string;
}

export class ReservationService {
  public async reserveTicket(
    ticketData: TicketData
  ): Promise<TicketModel> {
    const { eventId, ticketsPurchased } = ticketData;
    const transaction: Transaction | undefined =
      await TicketModel.sequelize?.transaction();
    if (!transaction) {
      throw new Error("No se pudo iniciar la transacción");
    }

    try {
      const event = await EventModel.findByPk(eventId, { transaction });
      if (!event) {
        throw new Error("Evento no encontrado");
      }

      if (event.totalSeats === undefined || event.seatsOccupied === undefined) {
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
        { eventId, ticketsPurchased, price: totalPrice, status: "reservado" },
        { transaction }
      );

      await transaction.commit();

      return ticket;
    } catch (error: unknown) {
      if (transaction) await transaction.rollback();
      if (error instanceof Error) {
        throw new Error(`Error al reservar el ticket: ${error.message}`);
      } else {
        throw new Error("Error al reservar el ticket: Error desconocido");
      }
    }
  }

  // Método para finalizar la reserva y actualizar el método de pago
  public async finalizeReservation(
    ticketId: number,
    paymentMethod: string
  ): Promise<TicketModel> {
    const transaction: Transaction | undefined = await EventModel.sequelize?.transaction();
    try {
      if (!transaction) {
        throw new Error("No se pudo iniciar la transacción");
      }

      const ticket = await TicketModel.findByPk(ticketId, { transaction });
      if (!ticket) {
        throw new Error("Reserva no encontrada");
      }

      if (ticket.status !== "reservado") {
        throw new Error("La reserva ya fue finalizada o no está reservada");
      }

      const event = await EventModel.findByPk(ticket.eventId, { transaction });
      if (!event) {
        throw new Error("Evento no encontrado");
      }

      if (event.totalSeats === undefined || event.seatsOccupied === undefined) {
        throw new Error("Datos del evento incompletos");
      }

      const availableSeats = event.totalSeats - event.seatsOccupied;
      if (ticket.ticketsPurchased > availableSeats) {
        throw new Error("No hay suficientes asientos disponibles para finalizar la reserva");
      }
      // Verificar si el ticket está en estado "pendiente" antes de finalizar la reserva
      if (ticket.paymentMethod !== "pendiente") {
        throw new Error("La reserva ya fue finalizada");
      }

      // Actualiza el método de pago a uno definitivo
      ticket.status = "vendido";
      ticket.paymentMethod = paymentMethod;
      await ticket.save({ transaction });

      // Actualiza la cantidad de asientos ocupados en el evento
      event.seatsOccupied += ticket.ticketsPurchased;
      await event.save({ transaction });

      // Confirma la transacción
      await transaction.commit();

      return ticket;
      } catch (error: unknown) {
        if (error instanceof Error) {
          throw new Error(`Error al finalizar la reserva: ${error.message}`);
        } else {
          throw new Error("Error al finalizar la reserva: Error desconocido");
        }
      };
    };

};
