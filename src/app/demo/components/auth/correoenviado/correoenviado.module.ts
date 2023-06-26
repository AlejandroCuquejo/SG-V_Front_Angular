import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorreoenviadoDemoRoutingModule } from './correoenviado-routing.module';
import { CorreoenviadoComponent } from './correoenviado.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		CorreoenviadoDemoRoutingModule,
		InputTextModule,
		SplitButtonModule,
		PasswordModule,
		FormsModule,
		ReactiveFormsModule,
	],
	declarations: [CorreoenviadoComponent]
})
export class CorreoenviadoDemoModule { }
