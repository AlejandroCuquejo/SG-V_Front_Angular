import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { UsuarioFormComponent } from './usuarioForm.component';
import { UsuarioFormDemoRoutingModule } from './usuarioForm-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';


@NgModule({
	imports: [
		CommonModule,
		UsuarioFormDemoRoutingModule,
		TableModule,
		InputTextModule,
		DropdownModule,
		SplitButtonModule,
		PasswordModule,
		DividerModule,
		ReactiveFormsModule,
		ConfirmPopupModule,
		ToastModule 
		
	],
	declarations: [UsuarioFormComponent]
})
export class usuarioDemoModule { }
