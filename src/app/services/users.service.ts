import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from 'angularfire2/database';
@Injectable()
export class UsersService {
    
    constructor(private _http:Http, private _db:AngularFireDatabase){}
    public  getUsers() : Observable<any>{
        return this._db.list('/users',{
        query: {
            orderByChild: 'name'
        }
        });
    }

    public save(user:any){
        this._db.database
        .ref('/users/'+user.$key)
        .update({name: user.name});
    }
}