import { Component, OnInit } from '@angular/core';
import { HistorialventasService } from './service/historialventas.service';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-historialventas',
  templateUrl: './historialventas.component.html',
  styleUrls: ['./historialventas.component.scss'],
  providers: [DialogService, MessageService,DynamicDialogRef,DynamicDialogConfig]

})
export class HistorialventasComponent implements OnInit {

   Ventas = [
    {
      "codigo": "1",
      "productos": "Boemia(12), Cerezos(3)",
      "costoTotal": "₲ 468000",
      "fechaCompra": "12/10/2023"
    },
    {
      "codigo": "2",
      "productos": "Lavanda(4)",
      "costoTotal": "₲ 76500",
      "fechaCompra": "13/10/2023"
    },
    {
      "codigo": "3",
      "productos": "Bambú (15), Rosas(6)",
      "costoTotal": "₲ 289000",
      "fechaCompra": "13/10/2023"
    },


    // Puedes agregar más objetos JSON aquí
  ];

  public historialventasForm!: FormGroup;
  public historialventasList: any [] = [];
  public bandera: boolean = false;

  public estado: any [] = [
    {label: "Activo", value: "A"},
    {label: "Inactivo", value: "I"},
  ];

  public pageSize: number = 10;
  public start: number = 0;
  public totalRecords: number = 0;
  public sortAsc: boolean = true;
  public sortField: string = "detallePdto"; //!!!!!!!!!!!Cambiar detallePdto por el correspondiente!!!!!!!!!!!!!!!!!!!

  constructor(
    public dialogService: DialogService,
    private service: HistorialventasService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { }

  ngOnInit() {
    this.initComponent(); 
    this.inventarioListData();
  }

  initComponent(){
    this.historialventasForm = new FormGroup({
      //idProducto: new FormControl(""),
      //detallePdto: new FormControl(""),
      //cantidad: new FormControl(""),
      //precio: new FormControl(""),
      //estado: new FormControl(""),
    })
  }

  inventarioListData() {
    this.service.getAll(
			this.start,
			this.pageSize,
			this.sortField,
			this.sortAsc,
			this.historialventasForm.value
      )
      .subscribe(
        {
          next: res =>{
            if(res.data){
              this.historialventasList = res.data.lista;
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
      this.service.getAll(this.start, this.pageSize, this.sortField, this.sortAsc, this.historialventasForm.value)
      .subscribe( (res) =>{
        this.historialventasList = res.data.lista;
      })
    } else {
      this.bandera = true;
    }
  }
  loadData($event?: any): void { }
  
  clearFilters() {
    this.initComponent();
    this.inventarioListData();
  }

}
