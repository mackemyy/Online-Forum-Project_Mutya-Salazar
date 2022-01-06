import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(route.url);
      const userData = localStorage.getItem('userData');
      if(!userData || !this.auth.isLoggedIn()) {
        this.router.navigate(['user-login']);
        return false;
      } 
      const userDataJSON = JSON.parse(userData);
      if(userDataJSON.isAdmin) {
        this.router.navigate(['admin-home']);
        return false;
      }
    return true;
  }
  
}
