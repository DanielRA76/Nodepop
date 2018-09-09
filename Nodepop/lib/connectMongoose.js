'use strict'

const mongoose = require('mongoose');

/**
 * Creo variable de conexión, no haría falta para lo hacemos para no tener que escribir tanto.
 */

const conn = mongoose.connection;

conn.on('error', err => {

    console.log('Error de conexión', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Conectado a MongoDB.', conn.name);
});

mongoose.connect(MONGOOSE_CONNECTION); /* Sustituimos es cadena ('mongodb://localhost/Nodepop'); por la variable de entorno con dotenv*/

module.exports = conn;