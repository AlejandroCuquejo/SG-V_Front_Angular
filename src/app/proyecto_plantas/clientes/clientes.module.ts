import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ClientesDemoRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';

@NgModule({
	imports: [
		CommonModule,
		ClientesDemoRoutingModule,
		TableModule
	],
	declarations: [ClientesComponent]
})
export class clientesDemoModule { }
