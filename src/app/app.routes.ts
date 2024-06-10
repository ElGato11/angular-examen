import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CrearComentarioComponent} from "./crear-comentario/crear-comentario.component";
import {GestionarAlumnoComponent} from "./gestionar-alumno/gestionar-alumno.component";
import {PresentacionComponent} from "./presentación/presentacion.component";
import {CrearAlumnoComponent} from "./crear-alumno/crear-alumno.component";

export const routes: Routes = [
  {path:"", component: PresentacionComponent},
  {path:"home",component: HomeComponent},
  {path:"crear-comentario/:id", component: CrearComentarioComponent},
  {path:"gestionar-alumno/:id", component: GestionarAlumnoComponent},
  {path:"crear-alumno",component: CrearAlumnoComponent}
];
