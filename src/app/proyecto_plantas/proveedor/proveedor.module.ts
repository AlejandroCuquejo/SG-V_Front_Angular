import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProveedorDemoRoutingModule } from './proveedor-routing.module';
import { ProveedorComponent } from './proveedor.component';

@NgModule({
	imports: [
		CommonModule,
		ProveedorDemoRoutingModule,
		TableModule
	],
	declarations: [ProveedorComponent]
})
export class proveedorDemoModule { }
