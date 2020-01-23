import { Component, OnInit } from '@angular/core';
import { Rol } from "../../../models/rol";
import { RolService } from '../../../services/rol/rol.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario/usuario.service';

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.scss']
})
export class CrearRolComponent implements OnInit {

  public form: FormGroup;

  rol:  Rol  = {
    id:  null ,
    nombre:null,
  };
  guard_name:string = 'api';
  usuarioLogueado:any = [];
  permisos:any = [];
  permisosGuardar :any = [];

  constructor( public _rolService: RolService,
               public _usuarioService: UsuarioService ) { }

  ngOnInit() { 
    this.cargarRolesUsuario();
    this.verificarDatosLogin();
  }

  cargarRolesUsuario(){
    this._usuarioService.cargarRolesUsuario().subscribe((response)=>{
      this.permisos = response.permissions; 
    });
  }

  crearRol(forma:NgForm){
    
    this._rolService.crearRol(forma.value,this.permisosGuardar,this.guard_name,this.usuarioLogueado).subscribe((rol: Rol)=>{

      Swal.fire({
        title: '',
        text: 'Registro creado correctamente',
        //type: 'success'
      });

    });
  }
  checkPermisos(event){

    if(event.target.checked){
      this.permisosGuardar.push(event.target.value);

    }else{
      var indice = this.permisosGuardar.indexOf(event.target.value); // obtenemos el indice
      this.permisosGuardar.splice(indice, 1);
    }
  } 

  verificarDatosLogin(){

    let adminUsuario  = false;
    let crearRol  = false;

    let arrayPermisos:any   = localStorage.getItem('rolesPermisos');
    let arrayRol:any        = localStorage.getItem('roles');
    this.usuarioLogueado = JSON.parse(localStorage.getItem('user'));

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }

}
