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

  public historialventasForm!: FormGroup;
  public historialventasList: any [] = [];
  public bandera: boolean = false;
  public today: string = new Date().toLocaleDateString();
  public cant: number = 0;

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
