import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { EnvioDemoRoutingModule } from './envio-routing.module';
import { EnvioComponent } from './envio.component';

@NgModule({
	imports: [
		CommonModule,
		EnvioDemoRoutingModule,
		TableModule
	],
	declarations: [EnvioComponent]
})
export class enviosDemoModule { }
