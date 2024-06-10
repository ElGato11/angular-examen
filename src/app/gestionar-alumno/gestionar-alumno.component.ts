import {Component, OnInit} from "@angular/core";
import {Alumno} from "../modelos/alumno";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AlumnosServicios} from "../servicios/alumnos-servicios";
import {Comentario} from "../modelos/comentario";
import {ComentariosServicios} from "../servicios/comentarios-servicios";
import {NgForOf} from "@angular/common";
import {TutorServicios} from "../servicios/tutor-servicios";

@Component({
  selector: 'app-gestionar-alumno',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './gestionar-alumno.component.html',
  styleUrl: './gestionar-alumno.component.css'
})
export class GestionarAlumnoComponent implements OnInit{

  alumno !: Alumno;
  profesor:String = "";
  comentarios : Comentario[] = [];
  id !: number;

  constructor(private ruta: ActivatedRoute,
              private alumnoServicio:AlumnosServicios,
              private comentarioServicio:ComentariosServicios,
              private tutorServicio:TutorServicios) {
  }

  ngOnInit(): void {
    this.ruta.paramMap.subscribe(params => {
      this.id = +params.get("id")!;
      this.alumno = this.alumnoServicio.getAlumno(this.id);
      this.comentarios = this.comentarioServicio.getComentarios(this.id);
      this.profesor = this.tutorServicio.getTutor(this.alumno.profesorId).nombre;
    })

  }
}
