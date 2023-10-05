import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InventarioFormComponent } from './inventarioForm.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: InventarioFormComponent }
	])],
	exports: [RouterModule]
})
export class InventarioFomrDemoRoutingModule { }