import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HistorialenviosDemoRoutingModule } from './historialenvios-routing.module';
import { HistorialenviosComponent } from './historialenvios.component';

@NgModule({
	imports: [
		CommonModule,
		HistorialenviosDemoRoutingModule,
		TableModule
	],
	declarations: [HistorialenviosComponent]
})
export class historialenviosDemoModule { }
