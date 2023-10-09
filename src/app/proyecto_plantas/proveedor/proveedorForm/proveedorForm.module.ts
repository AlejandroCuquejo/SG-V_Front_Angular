import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SplitButtonModule } from 'primeng/splitbutton';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProveedorFormComponent } from './proveedorForm.component';
import { ProveedorFomrDemoRoutingModule } from './proveedorForm-routing.module';


@NgModule({
	imports: [
		CommonModule,
		ProveedorFomrDemoRoutingModule,
		InputTextModule,
		DropdownModule,
		SplitButtonModule,
		PasswordModule,
		DividerModule,
		ReactiveFormsModule,
		ConfirmPopupModule,
		ToastModule,
		TableModule,
		ButtonModule
	],
	declarations: [ProveedorFormComponent]
})
export class proveedorFormdemoModule { }