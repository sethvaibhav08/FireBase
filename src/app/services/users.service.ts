import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
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
}