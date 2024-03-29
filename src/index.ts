import cors from "cors";
import express, { Router } from "express";
import bodyParser from "body-parser";
import { useRoutes } from "./CORE/useRoutes";

import { varsConfig } from "./Helpers/varsConfig";
import { configDB } from "./Helpers/configDB";
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || varsConfig.PORT_EXPRESS;

const app = express();
const router = Router();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

useRoutes(app, router);


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization,usuario_autorizacion,  X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


//configDB();

app.listen(port, async () => {
    //console.log(`Running server on [${varsConfig.PORT_EXPRESS}]`);//Si da fallo quitar el || process.env
    console.log(`Running server on `+ port);//Si da fallo quitar el || process.env
    configDB();
});
