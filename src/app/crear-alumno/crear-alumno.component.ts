import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {ComentariosServicios} from "../servicios/comentarios-servicios";
import {ActivatedRoute, Router} from "@angular/router";
import {Comentario} from "../modelos/comentario";
import {AlumnosServicios} from "../servicios/alumnos-servicios";
import {Alumno} from "../modelos/alumno";
import {Tutor} from "../modelos/tutor";
import {TutorServicios} from "../servicios/tutor-servicios";

@Component({
  selector: 'app-crear-alumno',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './crear-alumno.component.html',
  styleUrl: './crear-alumno.component.css'
})
export class CrearAlumnoComponent implements OnInit{

  alumnoForm !: FormGroup;
  profesores !: Tutor[];
  constructor(private fb:FormBuilder,
              private alumnosServicios: AlumnosServicios,
              private redireccionar : Router,
              private tutorServicios : TutorServicios) {
  }

  ngOnInit(): void {

    this.profesores = this.tutorServicios.getTutores();

      this.alumnoForm = this.fb.group({
        id: [0],
        nombre: ["", Validators.required],
        profesorId: [0]
      });
  }

  onSubmit(){
    if(this.alumnoForm.valid){

      let nuevoAlumno:Alumno = this.alumnoForm.value;
      this.alumnosServicios.addAlumno(nuevoAlumno);
      console.log(nuevoAlumno);
      this.redireccionar.navigate(["home"]);
    }
  }
}
