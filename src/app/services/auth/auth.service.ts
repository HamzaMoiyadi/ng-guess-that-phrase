import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "src/app/models/user.model"; // optional

import { auth } from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { MiniStoreService } from "../mini-store/mini-store.service";

@Injectable({ providedIn: "root" })
export class AuthService {
  user$: Observable<User>;

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _angularFireStore: AngularFirestore,
    private _miniStore: MiniStoreService,
    private _router: Router
  ) {
    this.user$ = this._angularFireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this._angularFireStore
            .doc<User>(`users/${user["uid"]}`)
            .valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();

    const credential = await this._angularFireAuth.auth.signInWithPopup(
      provider
    );
    console.log("credential is", credential);

    return this._updateUserData(credential.user);
  }

  private _updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this._angularFireStore.doc(
      `users/${user.uid}`
    );

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: user.role || "admin"
    };

    return userRef.set(data, { merge: true });
  }

  async signOut() {
    await this._angularFireAuth.auth.signOut();
    this._router.navigate(["/"]);
  }
}
