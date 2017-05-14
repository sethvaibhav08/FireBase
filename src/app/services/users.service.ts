import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class UsersService {
    
    private dbUser:string;
    constructor(private _http:Http, private _db:AngularFireDatabase){}
    
    public setUser(uid:string){
        this.dbUser = "/users/"+uid+"/";
    }
    
    public  getUsers() : Observable<any>{
        return this._db.list(this.dbUser,{
        query: {
            orderByChild: 'name'
        }
        });
    }

    public add(name:String){
        var newPostKey = this._db.database.ref(this.dbUser).push().key;
        this._db.database.ref(this.dbUser+newPostKey).set({name: name});
    }

    public save(user:any){
        this._db.database
        .ref(this.dbUser+user.$key)
        .update({name: user.name});
    }
}