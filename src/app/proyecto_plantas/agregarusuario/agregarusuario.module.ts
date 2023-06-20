import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarusuarioDemoRoutingModule } from './agregarusuario.routing.module';
import { AgregarusuarioComponent } from './agregarusuario.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
	imports: [
		CommonModule,
		AgregarusuarioDemoRoutingModule,
		InputTextModule,
		DropdownModule 
	],
	declarations: [AgregarusuarioComponent]
})
export class agregarusuariodemoModule { }