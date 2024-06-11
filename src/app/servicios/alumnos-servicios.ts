import {Injectable} from "@angular/core";
import {Alumno} from "../modelos/alumno";
import {async, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

const apiURL = "http://localhost:3001/alumnos";//esto no funciona
@Injectable({
  providedIn: "root"
})
export class AlumnosServicios {
  alumnos !:Alumno[];
  alumnoContador =100;
  constructor (private httpClient : HttpClient){
    this.fetchAlumnos().subscribe();

  }

  getAlumnos():Alumno[]{
    return this.alumnos;
  }
  getAlumno(id: number):Alumno{
    let ret = this.alumnos.find(alumno=>alumno.id == id);
    if(ret == undefined){
      ret = {id:-1,nombre:"No se ha encontrado", profesorId:-1};
    }
    return ret;

  }
  addAlumno(nuevo:Alumno){
    nuevo.id = this.alumnoContador;
    this.alumnoContador+=1;
    this.alumnos.push(nuevo);

}
  deleteAlumno(id:number){
    this.alumnos = this.alumnos.filter(alumno=>alumno.id != id);
  }

   fetchAlumnos():Observable<Alumno[]>{
    return this.httpClient.get<Alumno[]>(apiURL)
      .pipe(tap(alumnos=>{
        this.alumnos=alumnos;
      } ));
  }
}
