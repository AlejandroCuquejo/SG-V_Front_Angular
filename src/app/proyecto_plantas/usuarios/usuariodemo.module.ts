import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UsuariosDemoRoutingModule } from './usuario-routing.module';
import { UsuariosComponent } from './usuarios.component';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';


@NgModule({
	imports: [
		CommonModule,
		UsuariosDemoRoutingModule,
		TableModule,
		SplitButtonModule,
		DynamicDialogModule,
		InputTextModule,
		DropdownModule,
		SplitButtonModule,
		PasswordModule,
		DividerModule,
		ReactiveFormsModule,
		ConfirmPopupModule,
		ToastModule 
	],
	declarations: [UsuariosComponent]
})
export class UsuariosDemoModule { }
