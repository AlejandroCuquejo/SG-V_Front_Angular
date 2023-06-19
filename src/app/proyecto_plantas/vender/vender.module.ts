import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { VenderDemoRoutingModule } from './vender-routing.module';
import { VenderComponent } from './vender.component';

@NgModule({
	imports: [
		CommonModule,
		VenderDemoRoutingModule,
		TableModule
	],
	declarations: [VenderComponent]
})
export class venderdemoModule { }