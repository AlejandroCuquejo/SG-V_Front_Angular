import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ConfiguracionDemoRoutingModule } from './configuracion-routing.module';
import { ConfiguracionComponent } from './configuracion.component';

@NgModule({
	imports: [
		CommonModule,
		ConfiguracionDemoRoutingModule,
		TableModule
	],
	declarations: [ConfiguracionComponent]
})
export class ConfiguracionDemoModule { }
