import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InventarioService } from '../service/inventario.service';

@Component({
  selector: 'app-inventarioForm',
  templateUrl: './inventarioForm.component.html',
  styleUrls: ['./inventarioForm.component.scss']
})
export class InventarioFormComponent implements OnInit {
  public inventarioAgregarEditarForm!: FormGroup;
  public estadoList: any [] = [
    {label: "Activo", value: "A"},
    {label: "Inactivo", value: "I"},
  ];
  public accionDialog: string = "";

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public service: InventarioService,
  ){}

  ngOnInit() {
    this.initComponent();
  }

  initComponent(){
    this.inventarioAgregarEditarForm = new FormGroup({
      detallePdto: new FormControl("", Validators.required),
      cantidad: new FormControl("", Validators.required),
      precio: new FormControl("", Validators.required),
      estado: new FormControl("", Validators.required),
      usuAlta: new FormControl("acabanas@alumno.com"),
    })
    if(this.config.data){
      this.setData();
    } else {
      this.accionDialog = "agregar";
    }
  }

  setData() {
    this.inventarioAgregarEditarForm.setValue({
      detallePdto: this.config.data?.detallePdto ? this.config.data?.detallePdto : "",
      cantidad: this.config.data?.cantidad ? this.config.data?.cantidad : "",
      precio: this.config.data?.precio ? this.config.data?.precio : "",
      estado: this.config.data?.estado ? this.config.data?.estado : "",
      usuAlta: this.config.data?.usuAlta ? this.config.data?.usuAlta : "",
    });

    this.accionDialog = "editar";
  }

  guardarEditar(){
    let data = {
      accion: this.accionDialog,
      id: this.config.data?.idProducto ? this.config.data?.idProducto : "",
      form: {
        detallePdto: this.inventarioAgregarEditarForm.value.detallePdto,
        cantidad: this.inventarioAgregarEditarForm.value.cantidad,
        precio: this.inventarioAgregarEditarForm.value.precio,       
        estado: this.inventarioAgregarEditarForm.value.estado,       
        usuAlta: this.inventarioAgregarEditarForm.value.usuAlta = "acabanas@alumno.com",       
      }
    }
    this.ref.close(data);
  }

  closeDialog(){
    this.ref.close();
  }
}
