import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private ListaUsuarioURL = ("http://localhost:8080/api/usuarios");

  constructor( private http:HttpClient ) { }

  public getUsuarios():Observable<any>{
    return this.http.get(this.ListaUsuarioURL);
  }
}