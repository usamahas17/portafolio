import express, {Application} from "express";
import cors from "cors";
import bodyparse, { json } from "body-parser";

class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "2405"
        this.middleware();
    };
    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
        this.app.use(bodyparse.urlencoded({extended: true}));

    };
    liste(){
        this.app.listen(this.port, () =>{
            console.log("el servidor corre en el puerto " + this.port);
        })
    }

}
export default Server;