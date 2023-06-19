import { Component, OnInit } from '@angular/core';
import { ClientesService } from './service/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit{
  clientes: [] = [];

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.ObtenerClientes();
  }

  ObtenerClientes() {
    this.clientesService.getAllClientes().subscribe(resp => {
      this.clientes = resp; 
    });
  }
}
