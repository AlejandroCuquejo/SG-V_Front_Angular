import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlvidocontraDemoRoutingModule } from './olvidocontra-routing.module';
import { OlvidocontraComponent } from './olvidocontra.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { FormsModule } from '@angular/forms';


@NgModule({
	imports: [
		CommonModule,
		OlvidocontraDemoRoutingModule,
		InputTextModule,
		SplitButtonModule,
		PasswordModule,
		FormsModule,
		ReactiveFormsModule
	],
	declarations: [OlvidocontraComponent]
})
export class OlvidocontraDemoModule { }
