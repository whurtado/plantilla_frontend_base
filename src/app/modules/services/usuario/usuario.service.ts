import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor( private http: HttpClient,
               private env: EnvService) { }

  listarTodosLosUsuarios(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


    let buscar = '';
    let criterio= '';

    const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.listarUsuarios + url2;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );

  }

  cargarRolesUsuario(): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const url = this.env.apiGatewayBackOffice + constants.config.cargarRolesUsuario;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );
  }

  //metodo para crear un usuario
  crearUsuario(usuario,rolesGuardar: any, permisosGuardar:any): Observable<Usuario>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log("usuario", usuario);

    const body: FormData = new FormData();
    body.append('name', usuario.nombre);
    body.append('email', usuario.email);
    body.append('password', usuario.password);
    body.append('rolesGuardar', rolesGuardar);
    body.append('permisosGuardar', permisosGuardar);
    body.append('sede', '1');

    

    const url = this.env.apiGatewayBackOffice + constants.config.crearUsuario;
    return this.http.post<Usuario>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  mostrarUsuario( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarUsuario + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarUsuario(usuario,id_usuario): Observable<Usuario>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
 
    console.log("usuario",usuario);
    
    const body: FormData = new FormData();
    body.append('name', usuario.nombre);
    body.append('email', usuario.email);
    body.append('password', usuario.password);
    body.append('sede', '1');
    body.append('id', id_usuario);

    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarUsuario;

    console.log("ruta url",body)
    return this.http.post<Usuario>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarRolesUsuario(rolesGuardar,usuario){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
 
    const body: FormData = new FormData();
    body.append('rolesActualizar', rolesGuardar);
    body.append('id_user', usuario.id);

    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarRolesUsuario;

    console.log("ruta url",body)
    return this.http.post<any>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarPermisosUsuario(permisosGuardar,usuario){
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
 
    const body: FormData = new FormData();
    body.append('permisosActualizar', permisosGuardar);
    body.append('id_user', usuario.id);

    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarPermisosUsuario;

    console.log("ruta url",body)
    return this.http.post<any>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }
}
