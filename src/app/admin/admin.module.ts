import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewUsersComponent } from './view-users/view-users.component';
import { TopicsComponent } from './topics/topics.component';
//import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    ViewUsersComponent,
    TopicsComponent,
    //AdminHomeComponent,
    AdminDashboardComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
