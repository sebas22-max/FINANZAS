const express = require("express")
const app = express()
let port = 4000


app.get("/",(req,res)=>{
    res.send("tests")
})


app.listen(port, ()=>{
    console.log(`corriendo en el ${port}`)
})