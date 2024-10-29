import { sequelize } from "./database";
import { Sequelize } from "sequelize";
import { relation } from "./associations";


class ConnectDataBase {
    private static instance: ConnectDataBase;
    private connection: Sequelize;

    private constructor() {
        this.connection = sequelize;
        this.initialize();
    };

    public static getInstance(): ConnectDataBase {
        if (!ConnectDataBase.instance) {
            ConnectDataBase.instance = new ConnectDataBase();
        }
        return ConnectDataBase.instance;
    };

    private async initialize() {
        relation();
        try {
            await this.connection.sync();
            console.log("Database connected");
        } catch (error) {
            console.log("Error connecting to the database", error);
        };
    };

    public getConnection(): Sequelize {
        return this.connection;
    };
};

export default ConnectDataBase;