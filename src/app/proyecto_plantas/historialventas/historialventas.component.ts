import { Component, OnInit } from '@angular/core';
import { HistorialventasService } from './service/historialventas.service';

@Component({
  selector: 'app-historialventas',
  templateUrl: './historialventas.component.html',
  styleUrls: ['./historialventas.component.scss']
})
export class HistorialventasComponent implements OnInit {

  historialventas: [] = [];
  
  constructor(private historialventasService: HistorialventasService) { }

  ngOnInit(): void {
    this.getAllVentas();
  }

  //Muestra la lista de ventas
  getAllVentas() {
    this.historialventasService.getAllHistorialVentas().subscribe(resp => {
      this.historialventas = resp; 
    });
  }
}
