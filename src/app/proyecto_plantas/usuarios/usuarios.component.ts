import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './service/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: [] = [];

  constructor(private UsUsuarioService: UsuarioService) { }

  ngOnInit() {
    this.ObtenerUsuarios();
  }

  //Muestra la lista de usuarios
  ObtenerUsuarios() {
    this.UsUsuarioService.getUsuarios().subscribe(resp => {
      this.usuarios = resp; 
      console.log(this.usuarios);
    });
  }
}
