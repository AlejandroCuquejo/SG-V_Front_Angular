import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ProveedorFormComponent } from './proveedorForm/proveedorForm.component';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.scss'],
  providers: [DialogService, MessageService]
})
export class ProveedorComponent implements OnInit {

  constructor(
    private http: HttpClient ,
    public dialogService: DialogService
  ) { }

  ngOnInit() {

  }

   //Muestra ventana emergente para agregar usuario
   showAgregarProveedor() {
    const ref = this.dialogService.open(ProveedorFormComponent, {
        header: 'Agragar proveedor',
        width: '40%'
    });
}


}
