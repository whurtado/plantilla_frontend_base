import {Component, OnDestroy, OnInit} from '@angular/core';
import { LoginService } from '../../services/auth/login.service';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public form: FormGroup;

  usuario:any = {
    email:    'admin@gmail.com',
    password: '123456'
  }
  

  constructor( public _loginService:LoginService,
               public router:Router ) {
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  login (forma:NgForm){

    let seguir:boolean = false;

    this._loginService.login( forma ).subscribe(response => {
    let seguir:boolean = false;
       seguir = this.guardarDatosStorage( response );

       if(seguir){
        this.router.navigate(['/dashboard']);
       }
    },
    error =>{
      console.log("error--------------",error);
    });
      
    
  }

  guardarDatosStorage( response ){

    try{

        /*Obtener el nombre de los permisos del rol y pasarlos en un array al localstorage */
      let rolesPermisos = response.rolesPermisos;
      let permisosRol = [];

      for (let i= 0 ; i< rolesPermisos.length; i++){

          for (let j= 0 ; j< rolesPermisos[i].length; j++){

              permisosRol.push(rolesPermisos[i][j].name) ;

          }
      }
      /* fin permisos*/


      /*Obtener el nombre de los permisos del rol y pasarlos en un array al localstorage */

      let userPermisos = response.user.permissions;

      for (let i= 0 ; i< userPermisos.length; i++){
          permisosRol.push(userPermisos[i].name) ;
      }
      /* fin permisos*/

      //se quitan los permisos repetidos
      let permisoSinDuplicaciones:any = [...new Set(permisosRol)]; 

      //OBTENER ROLES DEL USUARIO

      let userRoles    = response.user.roles;
      let rolesUsuario = [];

      for (let i= 0 ; i< userRoles.length; i++){
          rolesUsuario.push(userRoles[i].name) ;
      }
      /* fin permisos*/

      //se quitan los permisos repetidos
      let rolSinDuplicaciones:any = [...new Set(rolesUsuario)]; 



      //OBTENER DATOS DEL USUARIO

      let usuario = [];

      usuario.push({
          'id': response.user.id,
          'name': response.user.name
      }) ;

      localStorage.setItem('token', response.access_token);
      localStorage.setItem('user', JSON.stringify(usuario));
      localStorage.setItem('rolesPermisos', permisoSinDuplicaciones);
      localStorage.setItem('roles', rolSinDuplicaciones);


    }catch ( error){

      return false;
  
    }

    return true;
  }
    
}
