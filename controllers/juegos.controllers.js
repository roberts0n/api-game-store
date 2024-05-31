const {request, response } = require("express");
const { juegos } = require("../juegos");


const getJuegos = (req,res)=>{

    return res.json({
        ok:true,
        statusCode:200,
        juegos
    });

}

const getJuegoById = (req = request,res = response)=>{

    let id = parseInt(req.params.id);

    let juegoABuscar = "";

    juegoABuscar = juegos.find(( juego )=>{

        return juego.id === id;

    });

    if(juegoABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            juegoABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay juego con ese ID"
        });
    }
    


}

module.exports = {
    getJuegos,
    getJuegoById
}