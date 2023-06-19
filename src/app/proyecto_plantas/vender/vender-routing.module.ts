import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VenderComponent} from './vender.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: VenderComponent }
	])],
	exports: [RouterModule]
})
export class VenderDemoRoutingModule { }