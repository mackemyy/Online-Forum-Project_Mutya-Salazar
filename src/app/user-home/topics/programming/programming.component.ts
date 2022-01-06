import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-programming',
  templateUrl: './programming.component.html',
  styleUrls: ['./programming.component.css']
})
export class ProgrammingComponent implements OnInit {

  userFname= '';
  userLname= '';
  userEmail = '';

  programPostValue= '';
  programPosts: any;

  constructor(private auth: AuthService, public db: AngularFireDatabase) {
    this.programPosts = db.list('programPosts').valueChanges();
  }

  ngOnInit(): void {
    this.userFname = this.auth.getDataV2().firstname;
    this.userLname = this.auth.getDataV2().lastname;
    this.userEmail = this.auth.getDataV2().email;
  }

  onSubmit() {
    this.db.list('programPosts').push({content: this.programPostValue});
    this.programPostValue= '';
  }

  deletePost() {
    const deletePost = this.db.list('programPosts');
    deletePost.remove();
  }

}
