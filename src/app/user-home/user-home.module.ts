import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TopicsComponent } from './topics/topics.component';
import { FeedComponent } from './feed/feed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './topics/education/education.component';
import { ProgrammingComponent } from './topics/programming/programming.component';
import { FoodComponent } from './topics/food/food.component';
import { TravelingComponent } from './topics/traveling/traveling.component';
import { BooksComponent } from './topics/books/books.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    TopicsComponent,
    FeedComponent,
    EducationComponent,
    ProgrammingComponent,
    FoodComponent,
    TravelingComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule, 
    ReactiveFormsModule, 
    FormsModule
  ],
  exports: [UserDashboardComponent, TopicsComponent, FeedComponent]
})
export class UserHomeModule { }
