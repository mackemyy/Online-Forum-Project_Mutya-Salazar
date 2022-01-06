import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-traveling',
  templateUrl: './traveling.component.html',
  styleUrls: ['./traveling.component.css']
})
export class TravelingComponent implements OnInit {
  userFname= '';
  userLname= '';
  userEmail = '';

  travelingPostValue= '';
  travelingPosts: any;

  constructor(private auth: AuthService, public db: AngularFireDatabase) {
    this.travelingPosts = db.list('travelingPosts').valueChanges();
  }

  ngOnInit(): void {
    this.userFname = this.auth.getDataV2().firstname;
    this.userLname = this.auth.getDataV2().lastname;
    this.userEmail = this.auth.getDataV2().email;
  }

  onSubmit() {
    this.db.list('travelingPosts').push({content: this.travelingPostValue});
    this.travelingPostValue= '';
  }

  deletePost() {
    const deletePost = this.db.list('travelingPosts');
    deletePost.remove();
  }

}
