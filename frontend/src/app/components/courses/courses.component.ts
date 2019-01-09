import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../services/courses/courses.service';
import { Curso } from '../../models/curso';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

  constructor(private route: ActivatedRoute, private coursesService: CoursesService) { }

  ngOnInit() {
    this.getTodosLosCursos();
  }
  // Método que recibe todos los cursos que hay en nuestra base de datos y los guarda en un array.
  getTodosLosCursos() {
    this.coursesService.getCursos()
      .subscribe(res => {
        this.coursesService.cursos = res as Curso[];
      });
  }

}
