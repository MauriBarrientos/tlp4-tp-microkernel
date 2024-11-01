import { TicketModel } from "../../tickets/models/ticketsModel";
import { EventModel } from "../../events/models/eventModel";
import { Transaction } from "sequelize";

interface TicketData {
  eventId: number;
  ticketsPurchased: number;
  paymentMethod: string;
}

export class ReservationService {
  public async reserveTicket(
    ticketId: number,
    quantity: number
  ): Promise<TicketModel> {
    const transaction: Transaction | undefined =
      await TicketModel.sequelize?.transaction();
    if (!transaction) {
      throw new Error("No se pudo iniciar la transacción");
    }

    try {
      const ticket = await TicketModel.findOne({
        where: { id: ticketId },
        attributes: ["id", "ticketsPurchased", "price", "eventId"],
        transaction,
      });

      if (!ticket) {
        throw new Error("Ticket no encontrado");
      }

      // Obtiene el evento relacionado con el ticket
      const event = await EventModel.findByPk(ticket.eventId, { transaction });
      if (
        !event ||
        event.totalSeats === undefined ||
        event.seatsOccupied === undefined
      ) {
        throw new Error("Datos del evento incompletos");
      }

      // Verifica si hay asientos disponibles
      const availableSeats = event.totalSeats - event.seatsOccupied;
      if (quantity > availableSeats) {
        throw new Error("No hay suficientes asientos disponibles");
      }

      // Actualiza la cantidad de tickets reservados sin confirmar el pago
      ticket.ticketsPurchased += quantity;
      ticket.paymentMethod = "pendiente"; // Establece el método de pago como "pendiente"
      await ticket.save({ transaction });

      // Actualiza los asientos ocupados en el evento
      event.seatsOccupied += quantity;
      await event.save({ transaction });

      // Confirma la transacción
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
    const ticket = await TicketModel.findByPk(ticketId);

    if (!ticket) {
      throw new Error("Ticket no encontrado");
    }

    // Verificar si el ticket está en estado "pendiente" antes de finalizar la reserva
    if (ticket.paymentMethod !== "pendiente") {
      throw new Error("La reserva ya fue finalizada");
    }

    // Actualiza el método de pago a uno definitivo
    ticket.paymentMethod = paymentMethod;
    await ticket.save();

    return ticket;
  }
}
