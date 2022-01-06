import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  title="THE HERMANAS FORUM"
  loggedInUser = '';

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.loggedInUser = this.auth.getDataV2().firstname;
  
    console.log(this.auth.getDataV2());
    console.log(this.loggedInUser);
  }

  logout() {
    this.auth.logout();
  }

}
