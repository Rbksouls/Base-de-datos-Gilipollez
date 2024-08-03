const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos (CSS, JS, imágenes, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para servir el formulario HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para servir la página de confirmación
app.get('/confirmacion', (req, res) => {
    res.sendFile(path.join(__dirname, 'confirmacion.html'));
});

// Middleware para manejar el cuerpo de las solicitudes POST
app.use(express.urlencoded({ extended: true }));

// Ruta para manejar el envío del formulario
app.post('/submit', (req, res) => {
    const { checkbox1, checkbox2, textarea } = req.body;

    // Validación en el lado del servidor
    if (!checkbox1 && !checkbox2) {
        res.status(400).send('Debe seleccionar al menos un checkbox.');
        return;
    }

    if (!textarea || textarea.trim() === '') {
        res.status(400).send('El campo de texto no puede estar vacío.');
        return;
    }

    // Si los datos son válidos, guardar en la base de datos
    
    // Redirigir a la página de confirmación
    res.redirect('/confirmacion');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
}).close(()=>{
    console.log("Sercer Cerrado")
});
