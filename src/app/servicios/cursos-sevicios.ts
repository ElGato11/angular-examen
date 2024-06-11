import {Injectable} from "@angular/core";
import {Tutor} from "../modelos/tutor";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Curso} from "../modelos/curso";

const apiURL = "http://localhost:3004/cursos";//esto no funciona
@Injectable({
  providedIn: "root"
})
export class CursosSevicios {
  cursos !: Curso[];
  constructor(private httpClient:HttpClient) {
    this.fetchCursos().subscribe();
  }

  getCursos():Curso[]{
    return this.cursos;
  }
  getCurso(id:number):Curso{
    let ret = this.cursos.find(alumno=>alumno.id == id);
    if(ret == undefined){
      ret = {id:-1,name:"No se ha encontrado", description:"",estudents:[]};
    }
    return ret;
  }

  fetchCursos():Observable<Curso[]>{
    return this.httpClient.get<Curso[]>(apiURL)
      .pipe(tap(cursos=>{
        this.cursos=cursos;
        console.log(this.cursos);
      } ));
  }
}
