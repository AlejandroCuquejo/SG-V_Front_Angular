import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistorialventasComponent} from './historialventas.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: HistorialventasComponent }
	])],
	exports: [RouterModule]
})
export class HistorialventasDemoRoutingModule { }