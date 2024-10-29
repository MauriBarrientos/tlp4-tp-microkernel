import { Model, DataTypes } from "sequelize";
import { sequelize } from "../../../kernel/database";


export class EventModel extends Model {
    public id!: number;
    public name!: string;
    public description!: string;
    public date!: Date;
    public location!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
};


EventModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
{
    sequelize,
    tableName: "events",
    timestamps: true,
},
);