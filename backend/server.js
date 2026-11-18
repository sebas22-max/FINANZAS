const express = require("express")
const router = require("./routes/router")
const app = express()
let port = 3000

app.use("/api",router)


app.listen(port, ()=>{
    console.log(`corriendo en el ${port}`)
})