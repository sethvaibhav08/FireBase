import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/services/users.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private users;
  public title:Array<any> = ["loading..."];

  constructor(private userService:UsersService){
  }

  ngOnInit(){
      this.getAllUsers();
  }
  public saveData(user:any) {
      this.userService.save(user);
  }

  private getAllUsers(){
    this.userService.getUsers()
    .subscribe(
      resp => this.title = resp,
      err => this.title = err
    );
  }
}
