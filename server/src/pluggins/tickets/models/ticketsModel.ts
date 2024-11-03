import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../../kernel/database";

export class TicketModel extends Model {
  public id!: number;
  public ticketsPurchased!: number;
  public price!: number;
  public eventId!: number;
  public paymentMethod!: string;
  public status!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

TicketModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticketsPurchased: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pendiente", 
    },
    status: {
      type: DataTypes.ENUM("reservado", "vendido"),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "tickets",
    timestamps: true,
  }
);
