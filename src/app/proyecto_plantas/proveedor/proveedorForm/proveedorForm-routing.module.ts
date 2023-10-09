import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProveedorFormComponent } from './proveedorForm.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProveedorFormComponent }
	])],
	exports: [RouterModule]
})
export class ProveedorFomrDemoRoutingModule { }