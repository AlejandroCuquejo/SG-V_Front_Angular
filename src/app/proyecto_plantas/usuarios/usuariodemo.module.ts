import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UsuariosDemoRoutingModule } from './usuario-routing.module';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
	imports: [
		CommonModule,
		UsuariosDemoRoutingModule,
		TableModule
	],
	declarations: [UsuariosComponent]
})
export class UsuariosDemoModule { }
