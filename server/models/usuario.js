const mongoose = require('mongoose'); // Mongoose

// Validator 
const unquiqueValidator = require('mongoose-unique-validator');

// Crear esquema
let Schema = mongoose.Schema;

let rolesValidos = {
    values: ['ADMIN_ROLE', 'USER_ROLE'],
    message: '{VALUE} no es un rol válido'
}

// Estructura del documento almacenado en la base de datos
let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String, 
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

// Ocultar la contraseña como respuesta
usuarioSchema.methods.toJSON = function () {
    
    let user = this;

    let userObject = user.toObject();

    delete userObject.password;

    return userObject;

}

// Utilizar pluggin 
usuarioSchema.plugin( unquiqueValidator, { message: '{PATH} debe de ser único' } );

module.exports = mongoose.model('Usuario', usuarioSchema)