import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RolService } from '../../../services/rol/rol.service';
import { Rol } from "../../../models/rol";
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.scss']
})
export class EditarRolComponent implements OnInit {

  public form: FormGroup;

  rol:Rol  = {
    id:  null ,
    nombre:null,
  };

  id_rol:any;  
  guard_name:string = 'api';
  permisosSistema:any = [];
  permisosGuardar :any = [];
  permisosRol :any = [];

  constructor( private _router: ActivatedRoute,
               public _rolService: RolService ) { }

  ngOnInit() {
    this.id_rol = this._router.snapshot.paramMap.get('id');

    this.mostrarRol(this.id_rol);
  }

  mostrarRol(id){ 

    this._rolService.mostrarRol(id).subscribe(response => { 
       console.log("respuesta",response);
      this.permisosRol = response.roles.permissions;

      this.rol = {
        id:  response.roles.id ,
        nombre:response.roles.name,
      }
      this.permisosSistema = response.permissions; 

      this.permissionAsignadosRol();


      },
      error =>{
        console.log("error--------------",error);
      });

  }

      //funcion que checkea los permisos que posee el rol asignados
  permisosCheckedos(id,permission){

        for (let i = 0; i < this.permisosRol.length; i++) {
              
            if (this.permisosRol[i].id == id){
                return true;
            }
        }
    }

  //llena la variable permisos guardar con los permiso que ya qtiene el usuario asignados
  permissionAsignadosRol(){

    //permisos del sistema
    for (let i = 0; i < this.permisosSistema.length; i++){
        //permisos asignados al usuario
        for (let j = 0; j < this.permisosRol.length; j++) {

            if (this.permisosRol[j].id == this.permisosSistema[i].id){

                //adiccionar permisos a array
               this.permisosGuardar.push(this.permisosSistema[i].name);
            }
        }
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

  actualizarRol(forma:NgForm){

    console.log("forma",forma.value)
      
    this._rolService.actualizarRol( forma.value,this.id_rol,this.permisosGuardar,this.guard_name).subscribe((rol: Rol) => { 

      Swal.fire({
        title: '',
        text: 'Registro actualizado correctamente',
        //type: 'success'
      });

    },
      error =>{
        console.log("error--------------",error);
      });

  }


}
