import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OlvidocontraDemoRoutingModule } from './olvidocontra-routing.module';
import { OlvidocontraComponent } from './olvidocontra.component';

import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';


@NgModule({
	imports: [
		CommonModule,
		OlvidocontraDemoRoutingModule,
		InputTextModule,
		SplitButtonModule,
		PasswordModule
	],
	declarations: [OlvidocontraComponent]
})
export class OlvidocontraDemoModule { }
