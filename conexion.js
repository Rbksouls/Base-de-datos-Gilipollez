//Lo primero es crear un pack.json
//\connect root@localhost:3306
const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const path = require("path");
const exp = require("constants");

const app = express();
const port = 3000;
//configuración de la base de datos
const conf_db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Estoesunabasededatos",
  database: "gilipollez_db",
});

//BodyParser para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));

//hacer estática la ruta.
app.use(express.static(path.join(__dirname, "public")));

//Renderizado de HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.get("/confirmacion", (req, res) => {
  res.sendFile(path.join(__dirname, "public/confirmacion.html"));
});

//Envio de datos.
app.post("/submit", (req, res) => {
  //pidiendo los datos, en caso de los checkbox hay que especificar ternarios.
  const checkbox1 = req.body.checkbox1 ? 1 : 0;
  const checkbox2 = req.body.checkbox2 ? 1 : 0;
  const mensaje = req.body.mensaje; 
  //Validacion de los campos
  if (!checkbox1 && !checkbox2) {
    return res.status(400).send("Debe seleccionar al menos un checkbox.");
  }

  //Almacenar la query
  const query =
    "INSERT INTO gilipollez_table (checkbox1,checkbox2,mensaje) VALUES (?,?,?)";
  conf_db.query(query, [checkbox1, checkbox2, mensaje], (err, result) => {
    if (err) {
      res.status(500).send("error al enviar");
    } else {
      res.redirect("/confirmacion");
      setTimeout(() => {
        server.close(() => {
          pool.end((err) => {
            if (err) {
              console.error(
                "Error al cerrar la conexión de la base de datos:",
                err
              );
            } else {
              console.log(
                "Conexión de la base de datos cerrada correctamente."
              );
            }
          });
          console.log("Servidor cerrado.");
        });
      }, 5000);
    }
  });
});
app.listen(port, () => {
  console.log(`server running por el puerto http://localhost:${port}`);
});

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
