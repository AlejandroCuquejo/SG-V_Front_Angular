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
  router: any;
  
  constructor(private agregarUsuarioService: AgregarusuarioService) {
    this.MandarRegistro = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, Validators.required),
      contrasenha: new FormControl(null, Validators.required),
      confirmarContrasenha: new FormControl(null, Validators.required)
    });
  }

  enviarDatos() {
    if (this.MandarRegistro.valid) {
      const contrasenha = this.MandarRegistro.get('contrasenha')?.value;
      const confirmarContrasenha = this.MandarRegistro.get('confirmarContrasenha')?.value;

      if (contrasenha === confirmarContrasenha) {
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
                this.router.navigate(['/plantas/usuarios']);
              }
            } 
          }
        );
      } else {
        alert("Las contraseñas no coinciden. Por favor, inténtalo nuevamente.");
      }
    } else {
      alert("Por favor, complete todos los campos requeridos.");
    }
  }

}
