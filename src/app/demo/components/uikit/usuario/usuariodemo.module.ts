import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UsuarioComponent } from './usuario.component';
import { UsuarioDemoRoutingModule } from './usuario-routing.module';

@NgModule({
	imports: [
		CommonModule,
		UsuarioDemoRoutingModule,
		TableModule
	],
	declarations: [UsuarioComponent]
})
export class UsuarioDemoModule { }
