import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { OlvidocontraService } from './service/olvidocontra.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-olvidocontra',
  templateUrl: './olvidocontra.component.html',
  styleUrls: ['./olvidocontra.component.scss']
})
export class OlvidocontraComponent implements OnInit {
  MandarcorreoRes: FormGroup;

  constructor(private olvidocontraService: OlvidocontraService) {
    this.MandarcorreoRes = new FormGroup({
      correo: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  ngOnInit() {
  }

  enviarCorreo() {
    if (this.MandarcorreoRes.valid) {
      const correo = this.MandarcorreoRes.get('correo')?.value; 
      this.olvidocontraService.enviarcorreoRe(correo) 
        .subscribe(
          response => {
            console.log("Éxito al enviar los datos");
          },
          error => {
            if (error instanceof HttpErrorResponse) {
              if (error.status === 500) {
                alert("El correo porpocionado no esta registrado");
              } 
              if (error.status === 200) {
                alert("Hemos enviado un link de restablecimiento a su cuenta");
              }  
            } 
          }
        );
    } else {
      console.log('El formulario no es válido');
      alert('El formulario no es válido');
      
    }
  }
}
