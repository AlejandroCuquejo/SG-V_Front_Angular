import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UsuariosDemoRoutingModule } from './usuario-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { SplitButtonModule } from 'primeng/splitbutton';
import {DynamicDialogModule} from 'primeng/dynamicdialog';



@NgModule({
	imports: [
		CommonModule,
		UsuariosDemoRoutingModule,
		TableModule,
		SplitButtonModule,
		DynamicDialogModule,
		
	],
	declarations: [
		UsuariosComponent
	],
	
})
export class UsuariosDemoModule { }
