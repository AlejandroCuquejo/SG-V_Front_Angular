import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestablecercontraDemoRoutingModule } from './restablecercontra-routing.module';
import { RestablecercontraComponent } from './restablecercontra.component';

import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';


@NgModule({
	imports: [
		CommonModule,
		RestablecercontraDemoRoutingModule,
		InputTextModule,
		SplitButtonModule,
		PasswordModule,
		DividerModule
	],
	declarations: [RestablecercontraComponent]
})
export class RestablecercontraDemoModule { }
