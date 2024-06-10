import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Alumno} from "../modelos/alumno";
import {AlumnosServicios} from "../servicios/alumnos-servicios";
import {RouterLink} from "@angular/router";
import {Observable, tap} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  alumnos !:Alumno[];
  constructor(private alumnoServicio: AlumnosServicios) {
  }

  ngOnInit() {
    this.alumnos = this.alumnoServicio.getAlumnos();
  }
}
