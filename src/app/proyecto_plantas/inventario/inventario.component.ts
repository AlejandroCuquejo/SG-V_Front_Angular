import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Inventario{
  id_producto: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  inventario: Inventario[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.ObtenerInventario();
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
