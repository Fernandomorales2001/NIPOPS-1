const express = require('express');
const cors = require('cors');
const bodyparser = require("body-parser");
const { dbConnection } = require('./db/config');
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

// Base de datos
dbConnection();

app.use(bodyparser.urlencoded({ extended: true }));

var producto_routes = require('./routes/producto');
app.use('/api',producto_routes);
// CORS
app.use( cors() );
// Lectura y parseo del body
app.use( express.json() );
// Rutas
app.use( '/api/auth', require('./routes/usuario') );
app.use( '/api/categoria', require('./routes/categoria'));
app.use( '/api/producto', require('./routes/producto'));

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
});