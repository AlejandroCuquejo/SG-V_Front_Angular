import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InventarioDemoRoutingModule } from './inventario-routing.module';
import { InventarioComponent } from './inventario.component';

@NgModule({
	imports: [
		CommonModule,
		InventarioDemoRoutingModule,
		TableModule
	],
	declarations: [InventarioComponent]
})
export class inventarioDemoModule { }
