import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { BooksComponent } from './topics/books/books.component';
import { EducationComponent } from './topics/education/education.component';
import { FoodComponent } from './topics/food/food.component';
import { ProgrammingComponent } from './topics/programming/programming.component';
import { TopicsComponent } from './topics/topics.component';
import { TravelingComponent } from './topics/traveling/traveling.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
  path: '', component: UserDashboardComponent, 
  children: [
      { path: 'topics', component: TopicsComponent, },
      { path: 'feed', component: FeedComponent },
      { path: 'topics/education', component: EducationComponent, },
      { path: 'topics/programming', component: ProgrammingComponent, },
      { path: 'topics/food', component: FoodComponent, },
      { path: 'topics/traveling', component: TravelingComponent,  },
      { path: 'topics/books', component: BooksComponent, },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserHomeRoutingModule { }
