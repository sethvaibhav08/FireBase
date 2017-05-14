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
  public title:Array<any> = ["loading..."];

  constructor(private userService:UsersService,
  private af:AuthService){
  }

  ngOnInit(){
      this.getAllUsers();
  }

  public login(){
      this.af.loginViaGoogle();
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
