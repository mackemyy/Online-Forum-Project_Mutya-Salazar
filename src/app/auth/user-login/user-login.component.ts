import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  authError: any;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.eventAuthError$.subscribe( data => {
      this.authError = data;
     
      if(localStorage.getItem('userData') !== null) {
        
        if(this.auth.isAdmin) {
          this.router.navigate(['/admin-home']);
        }
        else {
          this.router.navigate(['/user-home']);
        }
      }
      else {
        this.router.navigate(['user-login']);
      }
    });
  }

  login(form) {
    this.auth.login(form.value.email, form.value.password);
  }

  registerBtn() {
    this.router.navigateByUrl('/user-register');
  }



}
