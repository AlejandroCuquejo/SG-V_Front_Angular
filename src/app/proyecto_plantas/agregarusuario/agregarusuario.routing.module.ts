import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgregarusuarioComponent} from './agregarusuario.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: AgregarusuarioComponent }
	])],
	exports: [RouterModule]
})
export class AgregarusuarioDemoRoutingModule { }