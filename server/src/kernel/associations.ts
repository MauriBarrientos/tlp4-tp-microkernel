import { EventModel } from "../pluggins/events/models/eventModel";
import { TicketModel } from "../pluggins/tickets/models/ticketsModel";

export const relation = () => {

    EventModel.hasMany(TicketModel, {
        foreignKey: "eventId",
        as: "tickets",
    });
    TicketModel.belongsTo(EventModel, {
        foreignKey: "eventId",
        as: "events",
    });
};