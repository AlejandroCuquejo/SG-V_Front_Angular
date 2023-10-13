import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-usuarioForm',
  templateUrl: './usuarioForm.component.html',
  styleUrls: ['./usuarioForm.component.scss']
})
export class UsuarioFormComponent implements OnInit {

  public UsuarioAgregarEditarForm!: FormGroup;
  public estadoList: any [] = [
    {label: "Activo", value: "A"},
    {label: "Inactivo", value: "I"},
  ];
  public accionDialog: string = "";

  constructor(
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public service: UsuarioService,
  ){}

  ngOnInit() {
    this.initComponent();
  }

  initComponent(){
    this.UsuarioAgregarEditarForm = new FormGroup({
      nombre: new FormControl("", Validators.required),
      apellido: new FormControl("", Validators.required),
      correo: new FormControl('', [Validators.required, Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
        ]),
      estado: new FormControl("", Validators.required),
      usuAlta: new FormControl("acabanas@exclesis.com.py"),
    })
    if(this.config.data){
      this.setData();
    } else {
      this.accionDialog = "agregar";
    }
  }

  setData() {
    this.UsuarioAgregarEditarForm.setValue({
      nombre: this.config.data?.nombre ? this.config.data?.nombre : "",
      apellido: this.config.data?.apellido ? this.config.data?.apellido : "",
      correo: this.config.data?.correo ? this.config.data?.correo : "",
      estado: this.config.data?.estado ? this.config.data?.estado : "",
      usuAlta: this.config.data?.usuAlta ? this.config.data?.usuAlta : "",
    });

    this.accionDialog = "editar";
  }

  guardarEditar(){
    let data = {
      accion: this.accionDialog,
      id: this.config.data?.idUsuario ? this.config.data?.idUsuario : "",
      form: {
        nombre: this.UsuarioAgregarEditarForm.value.nombre,
        apellido: this.UsuarioAgregarEditarForm.value.apellido,
        correo: this.UsuarioAgregarEditarForm.value.correo,       
        estado: this.UsuarioAgregarEditarForm.value.estado,       
        usuAlta: this.UsuarioAgregarEditarForm.value.usuAlta = "acabanas@exclesis.com.py",       
      }
    }
    this.ref.close(data);
  }

  closeDialog(){
    this.ref.close();
  }

}
