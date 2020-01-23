import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

   usuarios:any = [];

  constructor( public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listarTodosLosUsuarios();
  }

  listarTodosLosUsuarios() {

    this._usuarioService.listarTodosLosUsuarios().subscribe(response => { 
      this.usuarios = response.user.data;
      console.log("respuesta", response.user.data);
      console.log("usus", this.usuarios);

      },
      error =>{
        console.log("error--------------",error);
      });
  }
}
