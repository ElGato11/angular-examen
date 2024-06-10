import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ComentariosServicios} from "../servicios/comentarios-servicios";
import {ActivatedRoute, Router} from "@angular/router";
import {AlumnosServicios} from "../servicios/alumnos-servicios";
import {Alumno} from "../modelos/alumno";
import {NgIf} from "@angular/common";
import {Comentario} from "../modelos/comentario";

@Component({
  selector: 'app-crear-comentario',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './crear-comentario.component.html',
  styleUrl: './crear-comentario.component.css'
})
export class CrearComentarioComponent implements OnInit{

  comentarioForm !: FormGroup;
  id!:number;
  constructor(private fb:FormBuilder,
              private comentarioServicio: ComentariosServicios,
              private ruta:ActivatedRoute,
              private redireccionar : Router) {
  }

  ngOnInit(): void {
    this.ruta.paramMap.subscribe(params=>{
      this.id = +params.get("id")!;
      this.comentarioForm = this.fb.group({
        id: [0],
        fecha: ["", Validators.required],
        contenido: [""],
        alumnoId:[this.id]
      });
    })
  }

  onSubmit(){
    if(this.comentarioForm.valid){

      let nuevoComentario:Comentario = this.comentarioForm.value;
      this.comentarioServicio.addComentario(nuevoComentario);
      this.redireccionar.navigate(["home"]);
      console.log(nuevoComentario);
    }
  }
}
