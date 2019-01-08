const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var userSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: 'El nombre no puede estar vacío'
    },
    username: {
        type: String,
        required: 'El nombre de usuario no puede estar vacío'
    },
    email: {
        type: String,
        required: 'El email no puede estar vacío',
        unique: true
    },
    password: {
        type: String,
        required: 'La contraseña no puede estar vacía',
        minlength: [4, 'La contraseña debe contener al menos 4 carácteres']
    },
    singUpDate: {
        type: Date,
        required: true,
        default: new Date()
    },
    lastAccess: {
        type: Date,
        required: true,
        default: new Date()
    },
    saltSecret: String
});

// Validacion personalizada para el campo 'email'
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Correo inválido.');

// Enventos (En este caso es para encriptar la clave que recibimos del cliente).
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Método para verificar la contraseña
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// Método para generar un jwt
userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

mongoose.model('usuario', userSchema);