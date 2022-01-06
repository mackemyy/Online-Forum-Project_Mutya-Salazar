import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserData } from '../interfaces/user-data';
import * as bcrypt from 'bcryptjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;
  role: string;
  private userInfo: BehaviorSubject<UserData> = new BehaviorSubject(null);
  
  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router
  ) { }


  getData() {
      // return localStorage.getItem('userData');
      return this.userInfo;
    }

  getDataV2() {
    return JSON.parse(localStorage.getItem('userData'));
  }

  isLoggedIn() {
    return !!localStorage.getItem('userData');
  }

  isAdmin() {
    if(this.userInfo.value.isAdmin === true) {
      return true;
    }
    else {
      return false;
    }
  }

  getUserState()
  { return this.afAuth.authState; }

  login( email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if(userCredential) {
          this.getUserData(userCredential).then(data => {
            this.userInfo.next(<UserData>data.data())
            console.log(this.getRole());
            console.log(this.isAdmin());
            console.log(this.userInfo.value);
            delete this.userInfo.value["password"];

            localStorage.setItem(`userData`, JSON.stringify(this.userInfo.value));
            if(this.userInfo.value.isAdmin === true) {
              alert('You have successfully logged in as Admin!');
              this.router.navigate(['admin-home']);
            }
            else {
              alert('You have successfully logged in!');
              this.router.navigate(['user-home']);
            }
          })
        }
      })
  }

  createUser(user) {
    console.log(user);
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName
        });

        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/user-login']);
          });
      })
      .catch( error => {
        this.eventAuthError.next(error);
      });
  }

  insertUserData(userCredential:firebase.default.auth.UserCredential){
    const salt = bcrypt.genSaltSync(10);
    const encryptPass = bcrypt.hashSync(this.newUser.password, salt);
    console.log(this.newUser.password);
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      firstname: this.newUser.firstName,
      lastname: this.newUser.lastName,
      password: encryptPass,
      username: this.newUser.username,
      isAdmin: false,
    })
  }

  getUserData(userCredential:firebase.default.auth.UserCredential) {
    const docuRef = this.db.doc(`Users/${userCredential.user.uid}`).ref
    return docuRef.get()
  }

  logout() { 
    localStorage.removeItem('userData');
    alert('You have logged out from The Hermanas Forum!');
    this.router.navigate(['user-login']);
    return this.afAuth.signOut();
    
  }

  getRole() {
    if(this.isAdmin() === true) {
      this.role = 'ADMIN';
    }
    else {
      this.role = 'USER';
    }
    return this.role;
  }

  createThreadPost(post: string) {
    

  }

  // secureSession(password:string, credObj:object) {
  //   const credObjStr = JSON.stringify(credObj);
  //   return btoa(`${password}|${credObjStr}`);
  // }

  // fetchSession(credStr:string) {
  //   const decodedCred = atob(credStr);
  //   const arrayCred= decodedCred.split("|");
  //   if(arrayCred.length !== 2) {
  //     return "";
  //   }
  //   return JSON.parse(arrayCred[1]);
  // }


}
