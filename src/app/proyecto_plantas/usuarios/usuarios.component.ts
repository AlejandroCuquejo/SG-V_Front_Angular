import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './service/usuario.service';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { AgregarusuarioComponent } from '../agregarusuario/agregarusuario.component';
import { FormControl, FormGroup } from '@angular/forms';
import { InventarioService } from '../inventario/service/inventario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [DialogService, MessageService,DynamicDialogRef,DynamicDialogConfig]

})
export class UsuariosComponent implements OnInit {
  usuarioList2 = [
    {
      "nombre": "Juan",
      "apellido": "Pérez",
      "correo": "juan.perez@example.com",
      "estado": "A"
    },
    {
      "nombre": "María",
      "apellido": "Gómez",
      "correo": "maria.gomez@example.com",
      "estado": "I"
    },
  ];
  
  public usuarioList: any [] = [];
  public usuarioForm!: FormGroup;
  public estado: any [] = [
    {label: "Activo", value: "A"},
    {label: "Inactivo", value: "I"},
  ];

  public bandera: boolean = false;

  public pageSize: number = 10;
  public start: number = 0;
  public totalRecords: number = 0;
  public sortAsc: boolean = true;
  public sortField: string = "detallePdto"; //!!!!!!!!!!!! Cambiar detallePdto !!!!!!!!!!!!!

  constructor(
    public dialogService: DialogService,
    private service: InventarioService,
    public ref: DynamicDialogRef,
  ) { }
  
  ngOnInit() {
    this.initComponent(); 
    this.usuarioListData();
  }

  initComponent(){
    this.usuarioForm = new FormGroup({
      //idProducto: new FormControl(""),
      //detallePdto: new FormControl(""),
      //cantidad: new FormControl(""),
      //precio: new FormControl(""),
      //estado: new FormControl(""),
    })
  }

  usuarioListData() {
    this.service.getAll(
			this.start,
			this.pageSize,
			this.sortField,
			this.sortAsc,
			this.usuarioForm.value
      )
      .subscribe(
        {
          next: res =>{
            if(res.data){
              this.usuarioList = res.data.lista;
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
      this.service.getAll(this.start, this.pageSize, this.sortField, this.sortAsc, this.usuarioForm.value)
      .subscribe( (res) =>{
        this.usuarioList = res.data.lista;
      })
    } else {
      this.bandera = true;
    }
  }
  loadData($event?: any): void { }

  
  openAgregarEditar(accion: string, data: object|string) {
    let titulo = accion == "editar" ? "Editar" : "Agregar";
    this.ref = this.dialogService.open(AgregarusuarioComponent, {
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
    })
  }

  clearFilters() {
    this.initComponent();
    this.usuarioListData();
  }
}
