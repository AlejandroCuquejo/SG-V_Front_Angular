import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistorialventasService {

  private obtenerhistorialventasURL = 'http://localhost:8080/historiales-venta/resumen-ventas';

  constructor( private http: HttpClient ) { }

  public getAllHistorialVentas(): Observable<any> {
    return this.http.get(this.obtenerhistorialventasURL);
  }
}