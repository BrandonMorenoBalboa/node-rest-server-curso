require('./config/config');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');

// Cada ves que se realice una peticion al servidor, estas dos lineas de codigo se ejecutaran
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/usuario', function (req, res) {
    res.json('get Usuario')
});

app.post('/usuario', function (req, res) {
    let body = req.body;
    if ( body.nombre === undefined ) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {

    }
    res.json({
        persona: body
    })
});

// Parametro en la url
app.put('/usuario/:id', function (req, res) {
    // Obtener parametro id enviado desde la url (req.params.id (id se debe reemplazar por el nombre del parametro, en este caso enviamos el id, por lo que colocamos .id))
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuario', function (req, res) {
    res.json('delete Usuario')
});

 
app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto', process.env.PORT);
})