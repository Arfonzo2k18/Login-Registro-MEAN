const express = require('express');
const cors = require('cors');

// Inicializaciones
const app = express();
require('./database');

// Configuración
app.set('port',process.env.PORT || 3000);
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// MiddleWare
app.use(express.urlencoded({extended: false}));

// Rutas
app.use(require('./routes/usuario.routes'));


// Atributos Globales


// Archivos estáticos


// Escucha del servidor
app.listen(app.get('port'), () => {
    console.log('Servidor funcionando en el puerto:', app.get('port'));
});