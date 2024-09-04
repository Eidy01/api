import rateLimit from "express-rate-limit";

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 minutos.
    max:100, //Maximo de peticiones : 100
    message: "Error, limite excedido" //Mensaje por si excede el limite
});

export default limiter;