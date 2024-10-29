import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../../kernel/database";

export class TicketModel extends Model {
    public id!: number;
    public totalSeats!: number;
    public seatsOccupied!: number;
    public price!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
};

TicketModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    seatsOccupied: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, 
{
    sequelize,
    tableName: "tickets",
    timestamps: true,
},
);