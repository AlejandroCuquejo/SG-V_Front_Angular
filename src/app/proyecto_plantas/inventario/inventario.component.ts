import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { InventarioFormComponent } from './inventarioForm/inventarioForm.component';
import { InventarioService } from './service/inventario.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
  providers: [DialogService, MessageService,DynamicDialogRef,DynamicDialogConfig]
})

export class InventarioComponent implements OnInit {
  public inventarioList: any [] = [];
  public inventarioForm!: FormGroup;

  inventario: any[] = [];
  public bandera: boolean = false;

  public pageSize: number = 10;
  public start: number = 0;
  public totalRecords: number = 0;
  public sortAsc: boolean = true;
  public sortField: string = "detallePdto";

  constructor(
    public dialogService: DialogService,
    private service: InventarioService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { }

  ngOnInit() {
    this.initComponent(); // Llama a la función para inicializar inventarioForm
    this.inventarioListData();
  }

  initComponent(){
    this.inventarioForm = new FormGroup({
      idProducto: new FormControl(""),
      detallePdto: new FormControl(""),
      cantidad: new FormControl(""),
      precio: new FormControl(""),
      estado: new FormControl(""),
    })
  }

  inventarioListData() {
    this.service.getAll(
			this.start,
			this.pageSize,
			this.sortField,
			this.sortAsc,
			this.inventarioForm.value
      )
      .subscribe(
        {
          next: res =>{
            if(res.data){
              this.inventarioList = res.data.lista;
              this.totalRecords = res.data.totalRecords;
            }
          },
          error: (error) => {
            console.log(error);
          }
        }
      );
  }
  
  onLazyLoadData($event: { first: number; rows: number; sortField: string | undefined; sortOrder: number; }){
    if(this.bandera){
      this.start = $event?.first;
      this.pageSize = $event?.rows;
      this.sortField = $event?.sortField != undefined ? $event?.sortField : "";
      this.sortAsc = $event?.sortOrder == 1 ? true : false;
      this.service.getAll(this.start, this.pageSize, this.sortField, this.sortAsc, this.inventarioForm.value)
      .subscribe( (res) =>{
        this.inventarioList = res.data.lista;
        console.log(this.inventarioList)
      })
    } else {
      this.bandera = true;
    }
  }

  mostrarData(){
    console.log(this.inventarioList)
    console.log("sdadsadsds")
  }

  openAgregarEditar(accion: string, data: object|string) {
    let titulo = accion == "editar" ? "Editar" : "Agregar";
    this.ref = this.dialogService.open(InventarioFormComponent, {
        header: `${titulo} `,
        data: data ? data : "",
        width: '35%'
    });
/*
    this.ref.onClose.subscribe( data => {
      if(data){
        if(data.accion === 'editar'){
          this.service.editarUsuario(data.id, data.form).subscribe(
            {
              next: res =>{
                if(res){
                  this.usuarioListData();
                }
              },
              error: (error) => {
                console.log(error);
              }
            }
          )
        } else {
          this.service.guardarUsuario(data.form).subscribe(
            {
              next: res =>{
                if(res){
                  this.usuarioListData();
                }
              },
              error: (error) => {
                console.log(error);
              }
            }
          )
        }
      }
    })*/
  }
}
