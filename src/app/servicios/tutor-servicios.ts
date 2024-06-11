import {Injectable} from "@angular/core";
import {Alumno} from "../modelos/alumno";
import {Tutor} from "../modelos/tutor";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Comentario} from "../modelos/comentario";

const apiURL = "http://localhost:3003/tutores";//esto no funciona
@Injectable({
  providedIn: "root"
})
export class TutorServicios {
  tutores !: Tutor[];
  constructor(private httpClient:HttpClient) {
    this.fetchTutores().subscribe();
  }

  getTutores():Tutor[]{
    return this.tutores;
  }
  getTutor(id:number):Tutor{
    let ret = this.tutores.find(tutor => tutor.id == id);
    if (ret == undefined){
      ret = {id:-1,nombre:"No se encontró su tutor"};
    }
    return ret;
  }
  addTutor(tutor:Tutor){
    this.tutores.push(tutor);
}

  deleteTutor(id:number){
    this.tutores = this.tutores.filter(tutor => tutor.id != id);
  }

  fetchTutores():Observable<Tutor[]>{
    return this.httpClient.get<Tutor[]>(apiURL)
      .pipe(tap(tutores=>{
        this.tutores=tutores;
      } ));
  }
}
