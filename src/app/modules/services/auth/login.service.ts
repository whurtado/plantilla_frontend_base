import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders,HttpErrorResponse} from '@angular/common/http';
import { Observable } from  'rxjs';
import { delay } from "rxjs/operators";
import {EnvService} from '../utils/env.service';
import {constants} from '../../../../config/app.constants';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,
              private env: EnvService) { }

  login( forma ): Observable<any>{

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/form-data');

    const body: FormData = new FormData();
    body.append('email', forma.email);
    body.append('password', forma.password);

    const url = this.env.apiGatewayBackOffice + constants.config.login;
    return this.http.post(url, body, {headers})
    .pipe(
      delay(500)
    );
  }

  verificarDatosLogin(){

    let adminUsuario  = false;
    let crearRol  = false;

    let arrayPermisos:any   = localStorage.getItem('rolesPermisos');
    let arrayRol:any        = localStorage.getItem('roles');
    let usuarioLogueado = JSON.parse(localStorage.getItem('user'));

    let idUssuarioLoguedo:any = usuarioLogueado[0].id;

    /*if(me.arrayPermisos.indexOf('create-role') >=0){ me.crearRol = true; }
    if(me.arrayRol.indexOf('admin') >=0){ me.adminUsuario = true; }*/

  }
}
