import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SolicitarproductosComponent } from './solicitarproductos.component';


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: SolicitarproductosComponent }
	])],
	exports: [RouterModule]
})
export class SolicitarproductosDemoRoutingModule { }
