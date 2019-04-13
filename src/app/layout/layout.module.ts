import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './main-layout/main-layout.component';
//import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {LayoutRoutingModule} from './layout-routing.module';
import { SideLayoutComponent } from './side-layout/side-layout.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FlexLayoutModule
  ],
  exports: [],
  declarations: [
    MainLayoutComponent,
    //FooterOnlyLayoutComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    SideLayoutComponent,
    FooterOnlyLayoutComponent
  ]
})
export class LayoutModule { }
