import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  selectedUsuario: Usuario;
  readonly URL_API = 'http://localhost:3000/api';

  token: string;
  id_usuario: string;

  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };

  constructor(private http: HttpClient, private router: Router) {
    this.selectedUsuario = new Usuario();
  }

  postUsuario(usuario: Usuario) {
    return this.http.post(this.URL_API + '/register', usuario);
  }

  login(authCredentials) {
    return this.http.post(this.URL_API + '/authenticate', authCredentials, this.noAuthHeader);
  }

  getUserProfile() {
    return this.http.get(this.URL_API + '/userProfile');
  }


  // Métodos de apoyo, recogida y creación de tokens.

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else {
      return null;
    }
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload) {
      return userPayload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  onLogout() {
    this.deleteToken();
    this.router.navigate(['/']);
  }

}
