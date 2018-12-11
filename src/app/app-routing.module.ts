import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SelecComponent } from './selec/selec.component';

const routes: Routes = [
   { path: '', component: AppComponent },
   { path: 'select', component: SelecComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
