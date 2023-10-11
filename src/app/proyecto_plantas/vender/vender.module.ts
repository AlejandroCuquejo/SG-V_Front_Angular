import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { VenderDemoRoutingModule } from './vender-routing.module';
import { VenderComponent } from './vender.component';
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
		VenderDemoRoutingModule,
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
	declarations: [VenderComponent]
})
export class venderdemoModule { }