import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

private obtenerclientesURL = 'http://localhost:8080/clientes/todos';

  constructor( private http: HttpClient ) { }

  public getAllClientes(): Observable<any> {
    return this.http.get(this.obtenerclientesURL);
  }
}
