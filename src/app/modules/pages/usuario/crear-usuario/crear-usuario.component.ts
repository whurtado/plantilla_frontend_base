import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../../models/usuario";
import { UsuarioService } from '../../../services/usuario/usuario.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {
  public form: FormGroup;

  usuario:  Usuario  = {
    id:  null ,
    nombre:null,
    email:null,
    password:null,
    sede:null,
  };

  roles:any = [];
  permisos:any = [];
  rolesGuardar :any = [];
  permisosGuardar :any = [];

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.cargarRolesUsuario();
  }

  cargarRolesUsuario(){
    this._usuarioService.cargarRolesUsuario().subscribe((response)=>{
      this.roles = response.roles;
      this.permisos = response.permissions; 
    });
  }

  crearUsuario(forma:NgForm){
    
      this._usuarioService.crearUsuario(forma,this.rolesGuardar,this.permisosGuardar).subscribe((usuario: Usuario)=>{

        Swal.fire({
          title: '',
          text: 'Registro creado correctamente',
          //type: 'success'
        });

      });
  }

  checkRoles(event){

    if(event.target.checked){
      this.rolesGuardar.push(event.target.value);

    }else{
      var indice = this.rolesGuardar.indexOf(event.target.value); // obtenemos el indice
      this.rolesGuardar.splice(indice, 1);
    }
  }

  checkPermisos(event){

    if(event.target.checked){
      this.permisosGuardar.push(event.target.value);

    }else{
      var indice = this.permisosGuardar.indexOf(event.target.value); // obtenemos el indice
      this.permisosGuardar.splice(indice, 1);
    }
  }

}
