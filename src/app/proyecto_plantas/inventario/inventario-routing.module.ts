import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InventarioComponent } from './inventario.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: InventarioComponent }
	])],
	exports: [RouterModule]
})
export class InventarioDemoRoutingModule { }
