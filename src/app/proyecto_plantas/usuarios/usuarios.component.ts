import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './service/usuario.service';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { AgregarusuarioComponent } from '../agregarusuario/agregarusuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [DialogService, MessageService]

})
export class UsuariosComponent implements OnInit {

  usuarios: [] = [];
  productDialog: boolean = false;

  constructor(private UsUsuarioService: UsuarioService, public dialogService: DialogService) { }

  ngOnInit() {
    this.ObtenerUsuarios();
  }

  //Muestra ventana emergente para agregar usuario
  showAgregarUsuario() {
    const ref = this.dialogService.open(AgregarusuarioComponent, {
        header: 'Agragar usuario',
        width: '70%'
    });
}

  //Muestra la lista de usuarios
  ObtenerUsuarios() {
    this.UsUsuarioService.getUsuarios().subscribe(resp => {
      this.usuarios = resp; 
      console.log(this.usuarios);
    });
  }
}
