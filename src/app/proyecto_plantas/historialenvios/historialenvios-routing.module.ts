import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistorialenviosComponent} from './historialenvios.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: HistorialenviosComponent }
	])],
	exports: [RouterModule]
})
export class HistorialenviosDemoRoutingModule { }