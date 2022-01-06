import { Injectable } from '@angular/core';
import { User } from '../shared/user';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  private userCollection: AngularFirestoreCollection<User>;
  user$!: Observable<User[]>;

  constructor(private afs: AngularFirestore) {
    this.userCollection = this.afs.collection<User>('users');
    this.user$ = this.userCollection.valueChanges();
  }

  addUser(user: User) {
    const pushkey = this.afs.createId();
    user.$key = pushkey;
    this.userCollection.doc(pushkey).set(user);
  }

  getUser() {
    return this.user$;
  }

  modifyUser(userId: string, userChanges: User) {
    this.userCollection.doc(userId).update(userChanges);
  }
  removeUser(userId: string) {
    this.userCollection.doc(userId).delete();
  }
}
