import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(private af:AngularFireAuth) { 
    this.af.authState.subscribe(
      resp => console.log(resp),
      err => console.log(err)
      );
  }

  public loginViaGoogle(){
    this.af.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
  
}
