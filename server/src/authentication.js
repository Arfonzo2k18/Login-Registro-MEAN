const jwt = require('jsonwebtoken');

/*  ====================
 *  Verificar token
 *  middleware que verifica si el jwt enviado es correcto
 *  ====================
 */

 let verificarToken = (req, res, next) => {
    //obtener header token
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if(err) {
            return res.status(401).json({
                ok: false,
                err: 'Token no válido'
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

 };


/*  ====================
 *  Verificar si el usuario tiene role ADMIN o no
 *  ====================
 */

 let verificarAdmin_Role = (req, res, next) => {
    
    let usuario = req.usuario;

    if( usuario.role === 'ADMIN' ) {
        next();
    } else {
        res.status(401).json({
            ok: false,
            err: 'Se requieren permisos de administrador'
        });
    }
 };


 /*  ====================
 *  Verificar token mediante URL
 *  servicio de imágenes
 *  ====================
 */

 let verificarTokenURL = (req, res, next) => {

    //obtiene el token enviado por url, ej: www.web.com?token=123123
    let token = req.query.token;

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if(err) {
            return res.status(401).json({
                ok: false,
                err: 'Token no válido'
            });
        }

        req.usuario = decoded.usuario;
        next();
    });

 };

 module.exports = {
    verificarToken,
    verificarAdmin_Role,
    verificarTokenURL
 };