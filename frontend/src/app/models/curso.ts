export class Curso {

    // tslint:disable-next-line:max-line-length
    constructor(nombre = '', descripcion = '', categoria = '', tecnologia = '', horas = 0, precio = 0, imagen = '', autor = '', requisitos = '', aprendizaje = '', fecha = new Date) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.tecnologia = tecnologia;
        this.horas = horas;
        this.precio = precio;
        this.imagen = imagen;
        this.autor = autor;
        this.requisitos = requisitos;
        this.aprendizaje = aprendizaje;
        this.fecha = fecha;
    }

    nombre: string;
    descripcion: string;
    categoria: string;
    tecnologia: string;
    horas: number;
    precio: number;
    imagen: string;
    autor: string;
    requisitos: string;
    aprendizaje: string;
    fecha: Date;
}
