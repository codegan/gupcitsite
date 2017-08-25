import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers} from '@angular/http';
import { User } from '../user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class HttpService{

  constructor(private http: Http){ }

  getData(){
    return this.http.get('http://localhost:8081/api/news')
  }
  getSelectData(id: String){
    return this.http.get('http://localhost:8081/api/news/'+id)
  }

  postData(obj: User){
        const body = JSON.stringify(obj);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8081/api/authenticate/', body, {headers: headers})
                        .map((resp:Response)=>
                        console.log(resp.json()))
                        .catch((error:any) =>{return Observable.throw(error);});
    }
}
