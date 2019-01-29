import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../models/curso';
import { Seccion } from 'src/app/models/seccion';
import { Clase } from 'src/app/models/clase';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  providers: [CoursesService]
})
export class CourseDetailsComponent implements OnInit {
  id_curso;
  nombreAutor;
  seccionSeleccionada;
  cargador: boolean;
  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.cargador = true;
    this.id_curso = this.route.snapshot.params.id;
    this.getDetalles(this.id_curso);
    this.getSecciones(this.id_curso);
  }

  getDetalles(id_curso: string) {
    this.coursesService.getDetallesCurso(id_curso)
      .subscribe(res => {
        this.coursesService.selectedCurso = res as Curso;
        this.cargador = false;
      });
  }

  getSecciones(id_curso: string) {
    this.coursesService.getSeccionesCurso(id_curso)
      .subscribe(res => {
        this.coursesService.secciones = res as Seccion[];
        this.cargador = false;
      });
  }

  getClases(id_seccion: string) {
    this.coursesService.getClasesSeccion(id_seccion)
    .subscribe(res => {
      this.coursesService.clases = res as Clase[];
      this.cargador = false;
    });
  }

}
