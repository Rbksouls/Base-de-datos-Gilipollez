const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir archivos estáticos desde el directorio "public"
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para el archivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'publick', 'index.html'));
});

// Ruta para el archivo about.html
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'publick', 'about.html'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
