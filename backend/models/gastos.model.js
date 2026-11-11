const database = require("../db/conexion_db")


const obtenerDatos = async () => {
    const resultado = await database.query("SELECT * FROM categorias")
    console.log(resultado)
}


obtenerDatos()


