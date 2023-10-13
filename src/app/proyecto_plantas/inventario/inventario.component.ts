import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { InventarioFormComponent } from './inventarioForm/inventarioForm.component';
import { InventarioService } from './service/inventario.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MessageHandler } from '../shared/handlers/message.handler';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
  providers: [DialogService, MessageService,DynamicDialogRef,DynamicDialogConfig]
})

export class InventarioComponent implements OnInit {
  public inventarioList: any [] = [];
  public inventarioForm!: FormGroup;

  public estado: any [] = [
    {label: "Activo", value: "A"},
    {label: "Inactivo", value: "I"},
  ];

  inventario: any[] = [];
  public bandera: boolean = false;
  public messageHandler!: MessageHandler;
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
    public messageService: MessageService,
  ) {
    this.messageHandler = new MessageHandler(this.messageService);
   }

  ngOnInit() {
    this.initComponent(); 
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
      })
    } else {
      this.bandera = true;
    }
  }
  loadData($event?: any): void { }


  openAgregarEditar(accion: string, data: object|string) {
    let titulo = accion == "editar" ? "Editar" : "Agregar";
    this.ref = this.dialogService.open(InventarioFormComponent, {
        header: `${titulo} `,
        data: data ? data : "",
        width: '35%'
    });

    this.ref.onClose.subscribe( data => {
      if(data){
        if(data.accion === 'editar'){
          this.service.editarUsuario(data.id, data.form).subscribe(
            {
              next: res =>{
                if(res){
                  this.inventarioListData();
                  this.messageHandler.showSuccessMessage("Producto modificado correctamente");

                }
              },
              error: (error) => {
                console.log(error);
                this.messageHandler.showErrorMessage(error.message);

              }
            }
          )
        } else {
          this.service.guardarUsuario(data.form).subscribe(
            {
              next: res =>{
                if(res){
                  this.inventarioListData();
                  this.messageHandler.showSuccessMessage("Producto agregado correctamente");
                }
              },
              error: (error) => {
                console.log(error);
                this.messageHandler.showErrorMessage(error.message);

              }
            }
          )
        }
      }
    })
  }
  
  clearFilters() {
    this.initComponent();
    this.inventarioListData();
  }
}
