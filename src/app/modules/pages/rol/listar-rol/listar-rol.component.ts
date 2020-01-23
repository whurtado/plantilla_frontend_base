import { Component, OnInit } from '@angular/core';
import { RolService } from '../../../services/rol/rol.service';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.scss']
})
export class ListarRolComponent implements OnInit {

  roles:any = [];

  constructor( public _rolService: RolService) { }

  ngOnInit() {
    this.listarTodosLosRoles();

  }

  listarTodosLosRoles() {

    this._rolService.listarTodosLosRoles().subscribe(response => { 
      this.roles = response;
      console.log("respuesta", response);
      console.log("usus", this.roles);

      },
      error =>{
        console.log("error--------------",error);
      });
  }

}
