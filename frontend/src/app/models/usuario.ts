export class Usuario {

    constructor(nombre = '', username = '', email = '', password = '') {
        this.nombre = nombre;
        this.username = username;
        this.email = email;
        this.password = password;
    }

    nombre: string;
    username: string;
    email: string;
    password: string;
}
