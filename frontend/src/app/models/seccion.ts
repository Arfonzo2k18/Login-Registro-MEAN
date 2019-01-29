export class Seccion {
    constructor(_id = '', idcurso = '', nombre = '') {
        this._id = _id;
        this.idcurso = idcurso;
        this.nombre = nombre;
    }

    _id: string;
    idcurso: string;
    nombre: string;
}
