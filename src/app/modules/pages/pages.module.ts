import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages/pages.component';
import {DashBoardComponent} from './dash-board/dash-board.component';
import {LayoutModule} from '../layout/layout.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PagesComponent, DashBoardComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    RolModule,
    UsuarioModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule {
}
