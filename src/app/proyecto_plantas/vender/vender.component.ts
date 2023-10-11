import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup } from '@angular/forms';
import { VenderService } from './service/vender.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.scss'],
  providers: [DialogService, MessageService,DynamicDialogRef,DynamicDialogConfig]
})
export class VenderComponent implements OnInit {

  public productoList: any [] = [];
  public productoForm!: FormGroup;

  public estado: any [] = [
    {label: "Activo", value: "A"},
    {label: "Inactivo", value: "I"},
  ];

  public bandera: boolean = false;

  public pageSize: number = 10;
  public start: number = 0;
  public totalRecords: number = 0;
  public sortAsc: boolean = true;
  public sortField: string = "detallePdto";

  constructor(
    public dialogService: DialogService,
    private service: VenderService,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
  ) { }

  ngOnInit() {
    this.initComponent(); 
    this.productoListData();
  }

  initComponent(){
    this.productoForm = new FormGroup({
      idProducto: new FormControl(""),
      detallePdto: new FormControl(""),
      cantidad: new FormControl(""),
      precio: new FormControl(""),
      estado: new FormControl(""),
    })
  }

  productoListData() {
    this.service.getAll(
			this.start,
			this.pageSize,
			this.sortField,
			this.sortAsc,
			this.productoForm.value
      )
      .subscribe(
        {
          next: res =>{
            if(res.data){
              this.productoList = res.data.lista;
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
      this.service.getAll(this.start, this.pageSize, this.sortField, this.sortAsc, this.productoForm.value)
      .subscribe( (res) =>{
        this.productoList = res.data.lista;
      })
    } else {
      this.bandera = true;
    }
  }
  loadData($event?: any): void { }

  clearFilters() {
    this.initComponent();
    this.productoListData();
  }

}
