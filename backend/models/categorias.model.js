const database = require("../db/conexion_db")

class CategoriasModel{

    static async obtenerCategorias(){
        const resultado = await database.query("SELECT * FROM categorias")
        //[datos][metadatos]
        console.log(resultado)
        return resultado
        
    }
}

module.exports = CategoriasModel