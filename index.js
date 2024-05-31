
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;



//--------------------------------//

const {getJuegos, getJuegoById} = require("./controllers/juegos.controllers");

app.use(cors());

app.get("/" , getJuegos )

app.get("/:id",getJuegoById)



//--------------------------------//


app.listen(puerto,()=>{
    console.log('Todo bien aca jefe');
    console.log(`Servidor arriba, conectado al puerto ${puerto}`);
})