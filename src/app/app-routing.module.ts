import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { UserRegisterComponent } from './auth/user-register/user-register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserWelcomeComponent } from './user-welcome/user-welcome.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './auth/admin.guard';


const routes: Routes = [
  {
    path: '', component: UserWelcomeComponent,
  },
  {
    path: 'user-login', component: UserLoginComponent,
  },
  {
    path: 'user-register', component: UserRegisterComponent,
  },
  {
    path: 'admin-home', component: AdminComponent, canActivate:[AdminGuard],
    loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)
  },
  // {
  //   path: 'user-home', component: HomeComponent,  canActivate:[AuthGuardGuard],
  // },
  {
    path: 'user-home',  canActivate:[AuthGuardGuard],
    loadChildren: () => import('../app/user-home/user-home.module').then(m => m.UserHomeModule)
    
  },
  {
    path: '**', component: NotFoundComponent,
  },
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
