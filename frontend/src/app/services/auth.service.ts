import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly URL_API = 'http://localhost:3000/api';
  readonly URL_IMG = 'http://localhost:3000';

  selectedUsuario = new Usuario();
  token: string;
  idusuario: string;

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient, private router: Router) {}

  // Método que realiza la petición http para registrar un usuario en nuestra base de datos.
  postUsuario(usuario: Usuario) {
    return this.http.post(this.URL_API + '/register', usuario, this.noAuthHeader);
  }

  // Método que realiza la petición http para hacer login con un usuario.
  login(authCredentials) {
    return this.http.post(this.URL_API + '/authenticate', authCredentials, this.noAuthHeader);
  }

  // Método que realiza la petición http para traer los datos del usuario.
  getUserProfile(idusuario: string) {
    return this.http.get(this.URL_API + '/userprofile/' + idusuario);
  }

  // Métodos de apoyo, recogida y creación de tokens.

  // Método para guardar el token en almacenamiento local.
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Método para recoger el token del almaceenamiento local.
  getToken() {
    return localStorage.getItem('token');
  }

  // Método para eliminar el token del almacenamiento local.
  deleteToken() {
    localStorage.removeItem('token');
  }

  // Método para guardar el id del usuario en almacenamiento local.
  setIdUsuario(idusuario: string) {
    localStorage.setItem('idusuario', idusuario);
  }

  // Método para recoger el id del usuario del almacenamiento local.
  getIdUsuario() {
    return localStorage.getItem('idusuario');
  }

  // Método para borrar el id del usuario del almacenamiento local.
  deleteIdUsuario() {
    localStorage.removeItem('idusuario');
  }

  // Método para recoger el payload del usuario (De momento no está en uso).
  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  // Método para comprobar si hay alguien con la sesión iniciada.
  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  // Método para cerrar sesión.
  onLogout() {
    this.deleteToken();
    this.deleteIdUsuario();
    this.router.navigate(['/']);
  }

}
