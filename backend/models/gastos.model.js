const database = require("../db/conexion_db")


const obtenerDatos = async () => {
    const resultado = await database.query("SELECT * FROM categoria")
    console.log("resultado")
}





