import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './Footer/footer.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {SettingsComponent} from './settings/settings.component';
import {Routes, RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SettingsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    SettingsComponent,
    RouterModule
  ]
})
export class LayoutModule {
}
