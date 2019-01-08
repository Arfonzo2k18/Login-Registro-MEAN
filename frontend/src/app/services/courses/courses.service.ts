import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Curso } from '../../models/curso';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  cursos: Curso[];
  selectedCurso: Curso;
  readonly URL_API = 'http://localhost:3000/api';
  readonly URL_IMG = 'http://localhost:3000';

  id_curso: string;

  constructor(private http: HttpClient) {
    this.selectedCurso = new Curso();
  }

  getCursos() {
    return this.http.get(this.URL_API + '/allCourses');
  }
}
