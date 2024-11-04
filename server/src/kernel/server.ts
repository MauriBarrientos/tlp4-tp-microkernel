import express, { Express } from "express";
import ConnectDataBase from "./connection";
import { setupCore } from "./core";
import { loadPluggins } from "./pluggins";
import { config } from "../config/config";


class Server {
    private app: Express;
    private port: string | undefined;

    constructor() {
        this.app = express();
        this.initialize();
        this.port = config.PORT;
    };

    private initialize(): void {

        // configura el núcleo de la aplicación
        setupCore(this.app);

        // Carga de pluggins
        loadPluggins(this.app);
    };

    public listen(): void {
        this.app.listen(this.port, async () => {
            await ConnectDataBase.getInstance();
            console.log(`Server running on port ${this.port}`);
        });
    };

};

export default Server;