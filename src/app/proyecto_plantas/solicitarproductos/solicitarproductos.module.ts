import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { SolicitarproductosDemoRoutingModule } from './solicitarproducto-routing.module';
import { SolicitarproductosComponent } from './solicitarproductos.component';

@NgModule({
	imports: [
		CommonModule,
		SolicitarproductosDemoRoutingModule,
		TableModule
	],
	declarations: [SolicitarproductosComponent]
})
export class solicitarproductoDemoModule { }
