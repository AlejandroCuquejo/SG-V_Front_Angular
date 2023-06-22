import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AgregarusuarioService {

  constructor(private http: HttpClient) { }

  enviarDatos(registro: FormGroup) {
    const datos = registro.value;
    return this.http.post('http://localhost:8080/api/register', datos);
  }
}
