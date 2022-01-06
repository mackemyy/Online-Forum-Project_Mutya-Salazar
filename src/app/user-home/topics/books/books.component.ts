import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  userFname= '';
  userLname= '';
  userEmail = '';

  bookPostValue= '';
  bookPosts: any;

  constructor(private auth: AuthService, public db: AngularFireDatabase) {
    this.bookPosts = db.list('bookPosts').valueChanges();
  }

  ngOnInit(): void {
    this.userFname = this.auth.getDataV2().firstname;
    this.userLname = this.auth.getDataV2().lastname;
    this.userEmail = this.auth.getDataV2().email;
  }

  onSubmit() {
    this.db.list('bookPosts').push({content: this.bookPostValue});
    this.bookPostValue= '';
  }

  deletePost() {
    const deletePost = this.db.list('bookPosts');
    deletePost.remove();
  }

}
