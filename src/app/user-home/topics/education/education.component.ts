import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  userFname= '';
  userLname= '';
  userEmail = '';
  

  educationPostValue= '';
  educationPosts: any;

  constructor(private auth: AuthService, public db: AngularFireDatabase) {
    this.educationPosts = db.list('educationPosts').valueChanges();
  }

  ngOnInit(): void {
    this.userFname = this.auth.getDataV2().firstname;
    this.userLname = this.auth.getDataV2().lastname;
    this.userEmail = this.auth.getDataV2().email;
  }

  onSubmit() {
    this.db.list('educationPosts').push({content: this.educationPostValue});
    this.educationPostValue= '';
  }

  deletePost() {
    const deletePost = this.db.list('educationPosts');
    deletePost.remove();
  }
  

}
