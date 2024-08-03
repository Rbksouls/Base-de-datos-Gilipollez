const express = require("express");
const path = require("path");
const dodyParser = require("body-parser");

const app = express();
const port = 3000;

//Hacer estática la carpeta para que renderice los ficheros.
app.use(express.static(path.join(__dirname, "public")))

//Renderiza el HTML enlado con el CSS.
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})

//Contrucción de la escucha al servidor por un puerto en concreto.
app.listen(port, ()=>{
    console.log(`Server runnin on port ${port}`)
})


