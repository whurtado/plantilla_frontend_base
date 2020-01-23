import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';
import { Rol } from '../../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor( private http: HttpClient,
               private env: EnvService) { }

    listarTodosLosRoles(): Observable<any>{

      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/form-data');
      headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));


      let buscar = '';
      let criterio= '';

      const url2 = `?page=0&buscar=${buscar}&criterio=${criterio}` ;

      const body: FormData = new FormData();
      const url = this.env.apiGatewayBackOffice + constants.config.listarRoles ;
      return this.http.get(url, {headers})
      .pipe(
        delay(500)
      );

    }

    //metodo para crear un usuario
  crearRol(rol, permisosGuardar:any, guard_name:string, usuariologueado:object): Observable<Rol>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
    console.log("rolzzz", usuariologueado[0].id);

    const body: FormData = new FormData();
    body.append('name', rol.nombre);
    body.append('guard_name', guard_name);
    body.append('permissionGuardar', permisosGuardar);
    body.append('usuario_sesion', usuariologueado[0].id);


    const url = this.env.apiGatewayBackOffice + constants.config.crearRol;
    return this.http.post<Rol>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  mostrarRol( id) : Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));

    const body: FormData = new FormData();
    const url = this.env.apiGatewayBackOffice + constants.config.mostrarRol + '/'+id;
    return this.http.get(url, {headers})
    .pipe(
      delay(500)
    );
  }

  actualizarRol(rol,id_rol,permisosGuardar:any, guard_name:string): Observable<Rol>{
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');
    headers.append( 'Authorization', 'Bearer ' + localStorage.getItem('token'));
 
    console.log("rolssaaa---",rol);
    
    const body: FormData = new FormData();
    body.append('name', rol.nombre);
    body.append('id', id_rol);
    body.append('guard_name', guard_name);
    body.append('permissionActualizar', permisosGuardar);

    

    const url = this.env.apiGatewayBackOffice + constants.config.actualizarRol;

    console.log("ruta url",body)
    return this.http.post<Rol>(url, body, {headers})
    .pipe(
      delay(500)
    );
  }
}
