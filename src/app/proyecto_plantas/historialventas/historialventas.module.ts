import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HistorialventasDemoRoutingModule } from './historialventas-routing.module';
import { HistorialventasComponent } from './historialventas.component';

@NgModule({
	imports: [
		CommonModule,
		HistorialventasDemoRoutingModule,
		TableModule
	],
	declarations: [HistorialventasComponent]
})
export class historialventasdemoModule { }