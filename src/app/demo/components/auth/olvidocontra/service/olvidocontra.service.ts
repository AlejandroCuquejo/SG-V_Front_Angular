import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OlvidocontraService {

  constructor(private http: HttpClient) { }

  enviarcorreoRe(correo: string) { 
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/x-www-form-urlencoded'
  );

  const body = {};

  const params = new HttpParams()
      .append('correo', correo);

    return this.http.post('http://localhost:8080/api/reset/token', body, {
      headers: headers,
      params: params,
    });
  }
}
