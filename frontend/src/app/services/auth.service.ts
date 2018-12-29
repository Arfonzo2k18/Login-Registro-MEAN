import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  selectedUsuario: Usuario;
  readonly URL_API = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.selectedUsuario = new Usuario();
  }

  postUsuario(usuario: Usuario) {
    return this.http.post(this.URL_API, usuario);
  }
}
