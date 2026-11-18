const modelo = require("..//models/categorias.model")

class   CategoriasController{
    static async obtenerCategorias(req,res){

        const datos = await modelo.obtenerCategorias()
        return res.json(
            datos
        )
    }
}


module.exports = CategoriasControllerController