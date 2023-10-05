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
import { InventarioFormComponent } from './inventarioForm.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InventarioFomrDemoRoutingModule } from './inventarioForm-routing.module';


@NgModule({
	imports: [
		CommonModule,
		InventarioFomrDemoRoutingModule,
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
	declarations: [InventarioFormComponent]
})
export class inventarioFormdemoModule { }