import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { InventarioFormComponent } from './inventarioForm/inventarioForm.component';

interface Inventario{
  id_producto: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
  providers: [DialogService, MessageService]
})
export class InventarioComponent implements OnInit {
  inventario: Inventario[] = [];

  constructor(private http: HttpClient ,public dialogService: DialogService) { }

  ngOnInit() {
    this.ObtenerInventario();
  }

    //Muestra ventana emergente para agregar usuario
    showAgregarProducto() {
      const ref = this.dialogService.open(InventarioFormComponent, {
          header: 'Agragar prodcuto',
          width: '60%'
      });
  }

  ObtenerInventario(){
    this.http.get<Inventario[]>('http://localhost:8080/productos/todos').subscribe(
      (data: Inventario[]) => {
        this.inventario = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
