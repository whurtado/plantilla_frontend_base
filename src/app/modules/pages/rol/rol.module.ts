import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { RolRoutingModule } from './rol-routing.module';

import { ListarRolComponent } from './listar-rol/listar-rol.component';
import { CrearRolComponent } from './crear-rol/crear-rol.component';
import { EditarRolComponent } from './editar-rol/editar-rol.component';
import { RolComponent } from './rol/rol.component';


@NgModule({
  declarations: [ListarRolComponent, CrearRolComponent, EditarRolComponent, RolComponent],
  imports: [
    CommonModule,
    RolRoutingModule,
    FormsModule
  ]
})
export class RolModule { }
