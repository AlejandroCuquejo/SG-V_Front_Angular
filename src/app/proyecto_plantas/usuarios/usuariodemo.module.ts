import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UsuariosDemoRoutingModule } from './usuario-routing.module';
import { UsuariosComponent } from './usuarios.component';

import { SplitButtonModule } from 'primeng/splitbutton';


@NgModule({
	imports: [
		CommonModule,
		UsuariosDemoRoutingModule,
		TableModule,
		SplitButtonModule,
	],
	declarations: [UsuariosComponent]
})
export class UsuariosDemoModule { }
