import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/services/users.service";
import { AuthService } from "app/services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private users;
  private loggedInUserData:any;
  public title:Array<any> = ["loading..."];

  constructor(private userService:UsersService,
  private af:AuthService){
  }

  ngOnInit(){
      this.af.getAuthState().subscribe(
          authResp => this.handleAuth(authResp),
          err => console.log("Auth Error: "+err)
      );     
  }

  public login(){
      this.af.loginViaGoogle();
  }

  private handleAuth(authResp:any){
    this.loggedInUserData = authResp.providerData[0];
    this.userService.setUser(this.loggedInUserData.uid);
     this.getAllUsers();
  }

  public saveData(user:any) {
      this.userService.save(user);
  }

  public addData(name:String){
    this.userService.add(name);
  }

  private getAllUsers(){
    this.userService.getUsers()
    .subscribe(
      resp => this.title = resp,
      err => this.title = err
    );
  }
}
