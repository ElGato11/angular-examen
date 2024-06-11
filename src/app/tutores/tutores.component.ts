import {Component, OnInit} from "@angular/core";
import {NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {Alumno} from "../modelos/alumno";
import {AlumnosServicios} from "../servicios/alumnos-servicios";
import {Tutor} from "../modelos/tutor";
import {TutorServicios} from "../servicios/tutor-servicios";

@Component({
  selector: 'app-tutores',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './tutores.component.html',
  styleUrl: './tutores.component.css'
})
export class TutoresComponent implements OnInit {
  tutores !:Tutor[];
  constructor(private tutoresService: TutorServicios,
              private navegar:Router) {
  }

  borrarTutor(id:number){
    this.tutoresService.deleteTutor(id);
    this.navegar.navigate(["/"]).then(()=>{
      this.navegar.navigate(["/tutores"]);
    });

  }

  ngOnInit() {
    this.tutores = this.tutoresService.getTutores();
  }
}
