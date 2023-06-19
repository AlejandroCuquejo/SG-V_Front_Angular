import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HistorialiniciosDemoRoutingModule } from './historialinicios-routing.module';
import { HistorialiniciosComponent } from './historialinicios.component';

@NgModule({
	imports: [
		CommonModule,
		HistorialiniciosDemoRoutingModule,
		TableModule
	],
	declarations: [HistorialiniciosComponent]
})
export class HistorialiniciosdemoModule { }