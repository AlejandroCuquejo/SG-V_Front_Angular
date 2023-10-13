import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, finalize } from 'rxjs'; 
import { MessageResponse } from '../../shared/model/message-response.model';
import { headers } from '../../shared/helpers/util';
import { HttpErrorHandler } from '../../shared/handlers/http.error.handler';

@Injectable({
  providedIn: 'root'
})
export class HistorialventasService {

  private handler: HttpErrorHandler = new HttpErrorHandler();
  private loading = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
  ) { }

  getAll(start: number, pageSize: number, sortField: string, sortAsc: boolean, data: any): Observable<MessageResponse> { 
    this.loading.next(true);
    
    let params = new HttpParams();
    params = params
        .set('page',`${Math.ceil(start / pageSize)}`)
        .set('pageSize',`${pageSize}`)
        .set('sortField',`${sortField}`)
        .set('sortAsc',`${sortAsc}`)
        .set('idProducto',`${data.idProducto}`)
        .set('detallePdto',`${data.detallePdto}`)
        .set('cantidad',`${data.cantidad}`)
        .set('precio',`${data.precio}`)
        .set('estado',`${data.estado}`)
        .set('estado',`${data.estado}`)

        return this.http.get<MessageResponse>("http://localhost:8080/api/producto/list", { params, headers })
        .pipe(
          finalize(() => {
              this.loading.next(false);
          })
      )
      .pipe(
          catchError(
              this.handler.handleError<MessageResponse>("producto:list")
          )
      );
  }
}