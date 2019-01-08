export class Curso {

    constructor(nombre = '', descripcion = '', categoria = '', tecnologia = '', horas = 0, precio = 0, imagen = '') {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.tecnologia = tecnologia;
        this.horas = horas;
        this.precio = precio;
        this.imagen = imagen;
    }

    nombre: string;
    descripcion: string;
    categoria: string;
    tecnologia: string;
    horas: number;
    precio: number;
    imagen: string;
}
