import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MainService {
    constructor( private http: Http,
                 private router: Router,){}

    login(value: any): Observable<string> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url ='http://localhost:8080/user/login/';

        return this.http.post(url, value, options)
            .map(res => res.json());
    }

    addMonster(value: any) : Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url ='http://localhost:8080/monsters/';
        return this.http.post(url, value, options)
            .map(res => res.json());
    }

    editMonster( name: string ,value: any) :Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url ='http://localhost:8080/monsters/';
        return this.http.put(url+name, value, options)
            .map(res => res.json());
    }

    getAllMonster(): Observable<any> {
        let url ='http://localhost:8080/monsters';
        return this.http.get(url).map(res=>res.json());
    }

    deleteMonster(monstername: string){
        let url ='http://localhost:8080/monsters/';
        return this.http.delete(url+monstername).map(res=>res.json());
    }
}