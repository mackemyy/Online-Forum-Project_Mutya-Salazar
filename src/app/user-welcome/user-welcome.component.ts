import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-welcome',
  templateUrl: './user-welcome.component.html',
  styleUrls: ['./user-welcome.component.css']
})
export class UserWelcomeComponent implements OnInit {
  constructor(private router: Router) { }
  goToUserRegister= () => {
    this.router.navigateByUrl('/user-register');
  }

  goToUserLogin= () => {
    this.router.navigateByUrl('/user-login');
  }

  ngOnInit(): void {
  }

}
