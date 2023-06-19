import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AgregarusuarioDemoRoutingModule } from './agregarusuario.routing.module';
import { AgregarusuarioComponent } from './agregarusuario.component';

@NgModule({
	imports: [
		CommonModule,
		AgregarusuarioDemoRoutingModule,
		TableModule
	],
	declarations: [AgregarusuarioComponent]
})
export class agregarusuariodemoModule { }