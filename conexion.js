/* const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Configuración de la base de datos
const config = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Estoesunabasededatos",
    database: "gilipollez_db"
});

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

// Hacer estática la carpeta para que renderice los ficheros
app.use(express.static(path.join(__dirname, "public")));

// Renderiza el HTML
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/confirmacion", (req, res) => {
    res.sendFile(path.join(__dirname, "confirmacion.html"));
});

app.post("/submit", (req, res) => {
    const checkbox1 = req.body.checkbox1 ? 1 : 0;
    const checkbox2 = req.body.checkbox2 ? 1 : 0;
    const textarea = req.body.textarea;

    if (!checkbox1 && !checkbox2) {
        return res.status(400).send("Debe seleccionar al menos un checkbox.");
    }

    if (!textarea) {
        return res.status(400).send("El campo de texto no puede estar vacío.");
    }

    const query = "INSERT INTO gilipollez_table (checkbox1, checkbox2, mensaje) VALUES (?, ?, ?)";
    config.query(query, [checkbox1, checkbox2, textarea], (err, result) => {
        if (err) {
            console.error("Error inserting data into database Mysql", err);
            return res.status(500).send("Failed to submit form");
        }
        res.send("Form submitted successfully");
    });

    console.log("Data received", checkbox1, checkbox2, textarea);
});

// Construcción de la escucha al servidor por un puerto en concreto
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});
 */