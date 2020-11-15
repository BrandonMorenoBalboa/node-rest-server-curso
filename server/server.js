require('./config/config');
const express = require('express');
const mongoose = require('mongoose'); // Mongoose
const app = express();
const bodyParser = require('body-parser');

// Cada ves que se realice una peticion al servidor, estas dos lineas de codigo se ejecutaran
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(require('./routes/usuario'));


// Conectarse a la base de datos
mongoose.connect( process.env.URLDB, 
                { useNewUrlParser: true, useCreateIndex: true },
                (err, res) => {
    if ( err ) {
        throw new err;
    }

    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
});