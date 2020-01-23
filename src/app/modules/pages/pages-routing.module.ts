import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent, children: [
      {path: '', component: DashBoardComponent},
      {path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)},
      {path: 'rol', loadChildren: () => import('./rol/rol.module').then(m => m.RolModule)}

      /*{path: 'usuario', component: UsuarioComponent},
      {path: 'rol', component: RolComponent }*/


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
