import express, {Application, urlencoded} from 'express'
import { AppRoutes } from './AppRoutes';
import cors from 'cors'
import dotenv from 'dotenv'
import { MongoConnection } from '../infraestructure/config/MongoConnection';
dotenv.config();

export class Server{

    private port:number;
    private app:Application;

    constructor(){
        let p:string = process.env.PORT || '';
        if(!p){
            throw Error("Port is missing on ENV file");
        } 
        this.port = parseInt(p,10);
        if (isNaN(this.port)) {
            throw new Error("Invalid PORT value in ENV file");
        }
        this.app = express();
        this.startMiddlewares();
        this.startRoutes();
        this.startConnection();
        this.startServer();
    }


    startMiddlewares(){
        this.app.use(express.json());
        this.app.use(urlencoded({extended:true}));
        this.app.use(cors());
    }

    startRoutes(){
        this.app.use(AppRoutes.startAppRoutes())
    }

    async startConnection(){
        const url = process.env.MONGO_URL;
        if(!url){
            throw new Error("URL MONGO IS MISSING");
        }
        const mongoConnection = MongoConnection.getInstance(url);
        await mongoConnection.startConnection();
        
    }

    startServer(){
        this.app.listen(this.port,()=>{
            console.log(`Server is Running on Port ${this.port}`);
        })
    }
}