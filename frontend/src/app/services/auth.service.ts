import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  selectedUsuario: Usuario;
  readonly URL_API = 'http://localhost:3000';

  token: string;
  id_usuario: string;

  constructor(private http: HttpClient) {
    this.selectedUsuario = new Usuario();
  }

  postUsuario(usuario: Usuario) {
    return this.http.post(this.URL_API, usuario);
  }

  iniciarSesion(correo: string, clave: string) {
    const datos = new URLSearchParams();

    datos.append('correo', correo);
    datos.append('clave', clave);

    return this.http.post(this.URL_API + '/login', datos)
    .subscribe( res => {
      const data_resp = res;
      console.log(data_resp);

   /*   if (data_resp.error) {
        console.log(data_resp.error);
      } else {
        this.token = data_resp.token;
        this.id_usuario = data_resp.id_usuario;
      }*/
    });

  }

}
