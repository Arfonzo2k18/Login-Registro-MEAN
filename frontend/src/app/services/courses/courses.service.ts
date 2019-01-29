import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../../models/curso';
import { Seccion } from 'src/app/models/seccion';
import { Clase } from 'src/app/models/clase';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  clases: Clase[];
  secciones: Seccion[];
  cursos: Curso[];
  selectedCurso: Curso;
  selectedSection: Seccion;
  selectedClass: Clase;
  readonly URL_API = 'http://localhost:3000/api';
  readonly URL_IMG = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    this.selectedCurso = new Curso();
    this.selectedSection = new Seccion();
    this.selectedClass = new Clase();
  }

  getCursos() {
    return this.http.get(this.URL_API + '/allCourses');
  }

  getDetallesCurso(idcurso: string) {
    return this.http.get(this.URL_API + '/getCourseDetails/' + idcurso);
  }

  getSeccionesCurso(idcurso: string) {
    return this.http.get(this.URL_API + '/getSectionsCourses/' + idcurso);
  }

  getClasesSeccion(idseccion: string) {
    return this.http.get(this.URL_API + '/getClassCourses/' + idseccion);
  }

}
