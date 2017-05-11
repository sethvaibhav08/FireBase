import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database'

import { AppComponent } from './app.component';
import { UsersService } from "app/services/users.service";

export const firebaseConfig = {
    apiKey: "AIzaSyCKsP_44DZectG-bcSJU9443zLZQMDl5TU",
    authDomain: "angularapp-1176.firebaseapp.com",
    databaseURL: "https://angularapp-1176.firebaseio.com",
    projectId: "angularapp-1176",
    storageBucket: "angularapp-1176.appspot.com",
    messagingSenderId: "452870737241"
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
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
