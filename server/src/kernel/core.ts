import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { config } from "../config/config";

export function setupCore(app: Express): void {

    // Configuración de seguridad
    app.use(cors());
    app.use(helmet());
    
    // Configuración de registro de solicitudes
    app.use(morgan('dev'));
    
    app.use(express.json());
    // Middleware de análisis de datos codificados en URL
    app.use(express.urlencoded({ extended: true }));
};