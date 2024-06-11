import {Component, OnInit} from "@angular/core";
import {NgForOf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Alumno} from "../modelos/alumno";
import {Comentario} from "../modelos/comentario";
import {AlumnosServicios} from "../servicios/alumnos-servicios";
import {ComentariosServicios} from "../servicios/comentarios-servicios";
import {TutorServicios} from "../servicios/tutor-servicios";
import {Curso} from "../modelos/curso";
import {CursosSevicios} from "../servicios/cursos-sevicios";

@Component({
  selector: 'app-gestionar-curso',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './gestionar-curso.component.html',
  styleUrl: './gestionar-curso.component.css'
})
export class GestionarCursoComponent implements OnInit{

  curso : Curso = {id:-1,name:"No se ha encontrado", description:"",estudents:[]};
  id !: number;
  alumnos !: Alumno[];

  constructor(private ruta: ActivatedRoute,
              private cursosSevicios:CursosSevicios,
              private alumnosServicios:AlumnosServicios) {
  }

  ngOnInit(): void {
    this.ruta.paramMap.subscribe(params => {
      this.id = +params.get("id")!;
      this.curso = this.cursosSevicios.getCurso(this.id);
      for (const alumnoid of this.curso.estudents) {
        this.alumnos.push(this.alumnosServicios.getAlumno(alumnoid));
      }
    })
  }
}
