import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private af:AngularFireAuth) { 
  }

  public getAuthState(){
    return this.af.authState;
  }

  public loginViaGoogle(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  
}
