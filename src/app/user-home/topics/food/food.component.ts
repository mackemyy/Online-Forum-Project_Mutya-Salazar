import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  userFname= '';
  userLname= '';
  userEmail= '';

  foodPostValue= '';
  foodPosts: any;

  constructor(private auth: AuthService, public db: AngularFireDatabase) {
    this.foodPosts = db.list('foodPosts').valueChanges();
  }

  ngOnInit(): void {
    this.userFname = this.auth.getDataV2().firstname;
    this.userLname = this.auth.getDataV2().lastname;
    this.userEmail = this.auth.getDataV2().email;
  }

  onSubmit() {
    this.db.list('foodPosts').push({content: this.foodPostValue});
    this.foodPostValue= '';
  }

  deletePost() {
    const deletePost = this.db.list('foodPosts');
    deletePost.remove();
  }

}
