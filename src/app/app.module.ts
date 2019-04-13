import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PreloadAllModules, RouterModule} from '@angular/router';

import {LayoutModule} from './layout/layout.module';


import { AppComponent } from './app.component';
import { SelecComponent } from './selec/selec.component';

import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    SelecComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    // RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
    LayoutModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
