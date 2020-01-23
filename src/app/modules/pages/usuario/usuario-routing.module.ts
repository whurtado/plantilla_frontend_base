import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

const routes: Routes = [
  {
    path: '', component: UsuarioComponent, children: [
      {path: '', component: ListarUsuarioComponent},
      {path: 'listarUsuario', component: ListarUsuarioComponent},
      {path: 'crearUsuario', component: CrearUsuarioComponent},
      {path: 'editarUsuario/:id', component: EditarUsuarioComponent }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
