import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth'

import { AppComponent } from './app.component';
import { UsersService } from "app/services/users.service";
import { AuthService } from "app/services/auth.service";

export const firebaseConfig = {
    apiKey: "AIzaSyCJx7rvrkYitHD838_0-DtKoxin30_H2q4",
    authDomain: "coloringlife-fc2a8.firebaseapp.com",
    databaseURL: "https://coloringlife-fc2a8.firebaseio.com",
    projectId: "coloringlife-fc2a8",
    storageBucket: "coloringlife-fc2a8.appspot.com",
    messagingSenderId: "1016268436646"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    AngularFireAuthModule
  ],
  providers: [UsersService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
