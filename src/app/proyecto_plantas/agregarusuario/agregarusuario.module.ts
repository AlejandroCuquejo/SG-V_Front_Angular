import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarusuarioDemoRoutingModule } from './agregarusuario.routing.module';
import { AgregarusuarioComponent } from './agregarusuario.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

@NgModule({
	imports: [
		CommonModule,
		AgregarusuarioDemoRoutingModule,
		InputTextModule,
		DropdownModule,
		SplitButtonModule,
		PasswordModule,
		DividerModule	
	],
	declarations: [AgregarusuarioComponent]
})
export class agregarusuariodemoModule { }