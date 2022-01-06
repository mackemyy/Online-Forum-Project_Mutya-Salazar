import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopicsComponent } from './topics/topics.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent, 
    children: [
      { path: 'view-users', component: ViewUsersComponent },
      { path: 'topics', component: TopicsComponent },
      { path: 'side-menu', component: SideMenuComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
