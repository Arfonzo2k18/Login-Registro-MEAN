import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses/courses.service';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../models/curso';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
  providers: [CoursesService]
})
export class CourseDetailsComponent implements OnInit {
  id_curso;
  cursoSeleccionado;
  nombreAutor: String;
  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.id_curso = this.route.snapshot.params.id;
    this.getDetalles(this.id_curso);
    this.getAutorCurso(this.cursoSeleccionado.autor);
  }

  getDetalles(id_curso: string) {
    this.coursesService.getDetallesCurso(id_curso)
      .subscribe(res => {
        this.cursoSeleccionado = res as Curso;
      });
  }

  getAutorCurso(id_autor: string) {
    this.coursesService.getAutorCurso(id_autor)
    .subscribe(res => {
      this.nombreAutor = res as String;
    });
  }

}
