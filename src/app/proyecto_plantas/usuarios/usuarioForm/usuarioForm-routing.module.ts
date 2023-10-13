import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuarioFormComponent } from './usuarioForm.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: UsuarioFormComponent }
	])],
	exports: [RouterModule]
})
export class UsuarioFormDemoRoutingModule { }