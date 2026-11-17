const database = require("../db/conexion_db")

class GastosModel{

<<<<<<< HEAD
    static async obtenerGastos(){
        const resultado = await database.query("SELECT * FROM categorias")
        //[datos][metadatos]
        console.log(resultado)
        return resultado
        
    }
}

module.exports = GastosModel
=======
const obtenerDatos = async () => {
    const resultado = await database.query("SELECT * FROM categoria")
    console.log(resultado)
}

obtenerDatos()





>>>>>>> ecc02e42268d4a3e0feb69199dc95a6aeed222f6
