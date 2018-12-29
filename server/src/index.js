const express = require('express');
const cors = require('cors');
const session = require('express-session');


// Inicializaciones
const app = express();
require('./database');

// Configuración
app.set('port',process.env.PORT || 3000);
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// MiddleWare
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'appMEAN',
    resave: true,
    saveUninitialized: true
}));

// Rutas
app.use(require('./routes/usuario.routes'));


// Atributos Globales


// Archivos estáticos


// Escucha del servidor
app.listen(app.get('port'), () => {
    console.log('Servidor funcionando en el puerto:', app.get('port'));
});