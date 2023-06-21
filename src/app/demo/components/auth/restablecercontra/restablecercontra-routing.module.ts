import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RestablecercontraComponent } from './restablecercontra.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: RestablecercontraComponent }
	])],
	exports: [RouterModule]
})
export class RestablecercontraDemoRoutingModule { }