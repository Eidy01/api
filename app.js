import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import session from "express-session";
import route from "./server/routes/route.js"
import limiter from "./server/routes/limit.js"

dotenv.config();

const app = express(); //Ejecutar Express. Almacenarla en una Constante

app.use(cors()) //Configurar el Cors

app.use(limiter)
app.use(express.json()) //Interpretar los elementos como Json
app.use(route)

app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie:{secure:false, express:null}
}));

const port = process.env.PORT;