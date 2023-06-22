import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgregarusuarioService } from './service/agregarusuario.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-agregarusuario',
  templateUrl: './agregarusuario.component.html',
  styleUrls: ['./agregarusuario.component.scss']
})
export class AgregarusuarioComponent {
  MandarRegistro: FormGroup;
  dropdownItems: any[] = [
    { name: 'Admin', value: 'Admin' },
    { name: 'Caja', value: 'Caja' },
    { name: 'Recursos humanos', value: 'RH' }
  ];
  
  constructor(private agregarUsuarioService: AgregarusuarioService) {
    this.MandarRegistro = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(),
      contrasenha: new FormControl()
    });
  }

  enviarDatos() {
    if (this.MandarRegistro.valid) {
      this.agregarUsuarioService.enviarDatos(this.MandarRegistro).subscribe(
        response => {
          console.log("Éxito al enviar los datos");
        },
        error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 500) {
              alert("Complete todos los campos");
            } else {
              alert("Registrado correctamente");
            }
          } 
        }
      );
    } else {
      alert("Por favor, complete todos los campos requeridos.");
    }
  }
}
