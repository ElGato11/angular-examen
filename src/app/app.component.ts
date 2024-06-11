import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AlumnosServicios} from "./servicios/alumnos-servicios";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {ComentariosServicios} from "./servicios/comentarios-servicios";
import {TutorServicios} from "./servicios/tutor-servicios";
import {Curso} from "./modelos/curso";
import {CursosSevicios} from "./servicios/cursos-sevicios";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(private alumnosServicios:AlumnosServicios,
              private comentariosServicios:ComentariosServicios,
              private tutorServicios:TutorServicios,
              private cursoServicios:CursosSevicios) {

  }
ngOnInit(){


}


}
