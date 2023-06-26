import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CorreoenviadoComponent } from './correoenviado.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: CorreoenviadoComponent }
	])],
	exports: [RouterModule]
})
export class CorreoenviadoDemoRoutingModule { }