import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistorialiniciosComponent} from './historialinicios.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: HistorialiniciosComponent }
	])],
	exports: [RouterModule]
})
export class HistorialiniciosDemoRoutingModule { }