import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SideLayoutComponent } from './side-layout/side-layout.component';
import { FooterOnlyLayoutComponent } from './footer-only-layout/footer-only-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'welcome', loadChildren: '../welcome/welcome.module#WelcomeModule' },
      { path: 'team', loadChildren: '../team/team.module#TeamModule' },
    //  { path: 'account-settings', loadChildren: '../account-settings/account-settings.module#AccountSettingsModule' },
    ]
  },
/*
  {
    path: '',
    component: SideLayoutComponent,
    children: [
      { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' }
    ]
  },
*/
  {
    path: '',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: 'login', loadChildren: '../login/login.module#LoginModule' }
    //  { path: 'registration', loadChildren: '../registration/registration.module#RegistrationModule' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
