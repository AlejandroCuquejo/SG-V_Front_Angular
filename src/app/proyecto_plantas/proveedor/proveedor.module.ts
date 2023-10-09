import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProveedorDemoRoutingModule } from './proveedor-routing.module';
import { ProveedorComponent } from './proveedor.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
	imports: [
		CommonModule,
		ProveedorDemoRoutingModule,
		TableModule,
		SplitButtonModule,
		DynamicDialogModule
	],
	declarations: [ProveedorComponent]
})
export class proveedorDemoModule { }
