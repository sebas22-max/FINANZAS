const database = require("../db/conexion_db")

class GastosModel{

    static async obtenerGastos(){
        const [resultado] = await database.query("SELECT * FROM registro")
        //[datos][metadatos]
        console.log(resultado)
        return resultado
        
    }
}

module.exports = GastosModel
