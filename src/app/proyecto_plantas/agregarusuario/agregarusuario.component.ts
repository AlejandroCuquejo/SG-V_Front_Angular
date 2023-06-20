import { Component } from '@angular/core';

@Component({
  selector: 'app-agregarusuario',
  templateUrl: './agregarusuario.component.html',
  styleUrls: ['./agregarusuario.component.scss']
})
export class AgregarusuarioComponent {

  dropdownItems: any[] = [
    { name: 'Admin', value: 'Admin' },
    { name: 'Caja', value: 'Caja' },
    { name: 'Recursos humanos', value: 'RH' }
  ]


}
