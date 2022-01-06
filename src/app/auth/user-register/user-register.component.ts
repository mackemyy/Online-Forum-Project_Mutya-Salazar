import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
 
  authError: any;

  constructor(private auth: AuthService, private route: Router) { }

  createUser(form) {
    this.auth.createUser(form.value);
  }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }
}
