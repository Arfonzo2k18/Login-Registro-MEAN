export class Usuario {

    constructor(nombre = '', username = '', email = '', password = '', imagen = '') {
        this.nombre = nombre;
        this.username = username;
        this.email = email;
        this.password = password;
        this.imagen = imagen;
    }

    nombre: string;
    username: string;
    email: string;
    password: string;
    imagen: string;
}
