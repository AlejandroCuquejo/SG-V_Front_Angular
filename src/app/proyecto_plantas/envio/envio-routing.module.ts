import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnvioComponent} from './envio.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: EnvioComponent }
	])],
	exports: [RouterModule]
})
export class EnvioDemoRoutingModule { }