import mongoose from "mongoose";
import { Connection } from "../../domain/interfaces/Connect";


export class MongoConnection implements Connection {
    private static instance: MongoConnection;
    private isConnected = false;

    private constructor(private readonly mongoUrl: string) {}

    public static getInstance(mongoUrl: string): MongoConnection {
        if (!MongoConnection.instance) {
            MongoConnection.instance = new MongoConnection(mongoUrl);
        }
        return MongoConnection.instance;
    }

    async startConnection(): Promise<boolean> {
        try {
            if (this.isConnected) {
                console.log("MongoDB ya está conectado.");
                return true;
            }

            await mongoose.connect(this.mongoUrl);
            this.isConnected = true;
            console.log("CONEXIÓN a Mongo EXITOSA");
            return true;
        } catch (error) {
            console.error("Error al conectar a MongoDB:", error);
            return false;
        }
    }

    async disconnect(): Promise<void> {
        if (!this.isConnected) return;
        await mongoose.disconnect();
        this.isConnected = false;
        console.log("MongoDB desconectado.");
    }
}
