import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolComponent } from './rol/rol.component';
import { ListarRolComponent } from './listar-rol/listar-rol.component';
import { CrearRolComponent } from './crear-rol/crear-rol.component';
import { EditarRolComponent } from './editar-rol/editar-rol.component';


const routes: Routes = [
  {
    path: '', component: RolComponent, children: [
      {path: '', component: ListarRolComponent},
      {path: 'listarRol', component: ListarRolComponent},
      {path: 'crearRol', component: CrearRolComponent},
      {path: 'editarRol/:id', component: EditarRolComponent }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolRoutingModule { }
