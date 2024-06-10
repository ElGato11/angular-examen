import {Injectable} from "@angular/core";
import {Alumno} from "../modelos/alumno";
import {Comentario} from "../modelos/comentario";
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

const apiURL = "http://localhost:3002/comentarios";//esto no funciona
@Injectable({
  providedIn: "root"
})
export class ComentariosServicios {
  comentarios !:Comentario[];
  comentariosCount : number = 100;
  constructor(private httpClient:HttpClient) {
    this.fetchComentarios().subscribe();
  }

  getComentarios(id:number):Comentario[]{
    return this.comentarios.filter(comentario =>comentario.alumnoId == id);
  }
  addComentario(comentario: Comentario){
    comentario.id = this.comentariosCount;
    this.comentariosCount+=1;
    this.comentarios.push(comentario);
    console.log(comentario);
  }
  fetchComentarios():Observable<Comentario[]>{
    return this.httpClient.get<Comentario[]>(apiURL)
      .pipe(tap(comentarios=>{
        this.comentarios=comentarios;
      } ));
  }

}
