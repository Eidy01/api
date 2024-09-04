import { query, Router, Router } from "express";
import db from "../database/db.js";
import query  from "../database/query.js";
import fs from "fs"; //Libreria nativa, para leer archivos
import session from "express-session";


//Leer el archivo de configuracion, que esta en config.json, que es el inicio de sesion para la bd.
const config = JSON.parse(fs.readFileSync("./server/database/config.json", "utf-8"));

//const database = new db(config);
//const Query = new query(database);

const router = Router();

router.get("/",(req,res)=>{
    res.json({message: "Bienvenido a la API" });
})

router.post("/login",(req,res)=>{
    req.session.user = {
        id:"1",
        username:"admin"
    }
})

router.get("/logout",(req,res)=>{
    req.session.destroy(()=>{
        res.json({message: "Sesion cerrada"})
    })
})

export default router;