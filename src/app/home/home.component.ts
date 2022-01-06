import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    // this.loggedInUser = this.auth.getData().value.firstname;
    
  }

  logout() {
    this.auth.logout();
  }

}
