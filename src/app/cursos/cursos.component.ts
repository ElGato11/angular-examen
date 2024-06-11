import {Component, OnInit} from "@angular/core";
import {NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {CursosSevicios} from "../servicios/cursos-sevicios";
import {Curso} from "../modelos/curso";

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {
  cursos !: Curso[];
  constructor(private cursosSevicios: CursosSevicios,
              private navegar:Router) {
  }

  ngOnInit() {
    this.cursos = this.cursosSevicios.getCursos();
  }
}
