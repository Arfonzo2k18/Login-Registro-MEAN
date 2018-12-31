/*  ======================
 *  Puerto (producción o localhost)
 *  ====================== 
 */
 process.env.PORT = process.env.PORT || 3000;


/*  ======================
 *  Entorno (producción o localhost)
 *  ====================== 
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/*  ======================
 *  Caducidad del TOKEN
 *  ====================== 
 */
(process.env.NODE_ENV === 'dev') ? process.env.CADUCIDAD_TOKEN = '48h' : process.env.CADUCIDAD_TOKEN = 60 * 60 *24 * 30; // = 30 dias

/*  ======================
 *  SEED de autentificación
 *  ====================== 
 */
process.env.SEED = process.env.SEED || "semilla-auth-token";

/*  ======================
 *  BDD
 *  ====================== 
 */
let urlDB;

if( process.env.NODE_ENV === 'dev' ){
    urlDB = 'mongodb://localhost:27017/app-mean';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;