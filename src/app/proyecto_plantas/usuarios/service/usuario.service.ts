import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, finalize } from 'rxjs'; 
import { MessageResponse } from '../../shared/model/message-response.model';
import { headers } from '../../shared/helpers/util';
import { HttpErrorHandler } from '../../shared/handlers/http.error.handler';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

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
        .set('idUsuario',`${data.idUsuario}`)
        .set('nombre',`${data.nombre}`)
        .set('apellido',`${data.apellido}`)
        .set('correo',`${data.correo}`)
        .set('estado',`${data.estado}`)

        return this.http.get<MessageResponse>("http://localhost:8080/api/usuario/list", { params, headers })
        .pipe(
          finalize(() => {
              this.loading.next(false);
          })
      )
      .pipe(
          catchError(
              this.handler.handleError<MessageResponse>("usuario:list")
          )
      );
  }

  guardarUsuario(usuarioObj: any): Observable<MessageResponse>  {
    this.loading.next(true);
    return this.http.post<MessageResponse>(`http://localhost:8080/api/usuario/create`, usuarioObj, { headers })
    .pipe(finalize(() => { this.loading.next(false); }))
    .pipe(catchError(this.handler.handleError<MessageResponse>('producto:crear')));
  }

  editarUsuario(id: number, usuarioObj: any, usuario: string = "acabanas@excelsis.com"): Observable<MessageResponse>  {
    this.loading.next(true);
    return this.http.put<MessageResponse>(`http://localhost:8080/api/usuario/update?id=${id}&usuario=${usuario}`, usuarioObj, { headers })
    .pipe(finalize(() => { this.loading.next(false); }))
    .pipe(catchError(this.handler.handleError<MessageResponse>('usuario:actualizar')));
  }
}