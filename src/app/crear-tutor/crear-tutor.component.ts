import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Tutor} from "../modelos/tutor";
import {AlumnosServicios} from "../servicios/alumnos-servicios";
import {Router} from "@angular/router";
import {TutorServicios} from "../servicios/tutor-servicios";
import {Alumno} from "../modelos/alumno";

@Component({
  selector: 'app-crear-tutor',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './crear-tutor.component.html',
  styleUrl: './crear-tutor.component.css'
})
export class CrearTutorComponent implements OnInit{

  tutorForm !: FormGroup;
  constructor(private fb:FormBuilder,
              private redireccionar : Router,
              private tutorServicios : TutorServicios) {
  }

  ngOnInit(): void {

    this.tutorForm = this.fb.group({
      id: [0],
      nombre: ["", Validators.required],
    });
  }

  onSubmit(){
    if(this.tutorForm.valid){

      let nuevoTutor:Tutor = this.tutorForm.value;
      this.tutorServicios.addTutor(nuevoTutor);
      this.redireccionar.navigate(["/tutores"]);
    }
  }
}
