import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OlvidocontraComponent } from './olvidocontra.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OlvidocontraComponent }
	])],
	exports: [RouterModule]
})
export class OlvidocontraDemoRoutingModule { }