import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.updateUserData(credential.user);
  }

  async emailPasswordRegistration(email: string, password: string, username: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(data => {
        const user = {
          ...data.user,
          displayName: username,          
        }
        // console.log(user)
        this.updateUserData(user);
      })
      .catch(error => {
        console.log(error);
      })
  }

  async emailPasswordSignIn(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(data => {
      })
      .catch(error => {
        console.log(error);
      })
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    userRef.get().subscribe(snap => {
      if (!snap.exists) {
        const data = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          userType: 'user'
        }

        return userRef.set(data, { merge: true });
      }
    })


  }
}
