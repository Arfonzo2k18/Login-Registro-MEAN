export class Clase {
    constructor(idseccion = '', nombre = '', duracion = 0, video = '', explicacion = '') {
        this.idseccion = idseccion;
        this.nombre = nombre;
        this.duracion = duracion;
        this.video = video;
        this.explicacion = explicacion;
    }

    idseccion: string;
    nombre: string;
    duracion: number;
    video: string;
    explicacion: string;
}
