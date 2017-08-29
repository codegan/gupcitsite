import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Response, Headers, URLSearchParams} from '@angular/http';
import { User } from '../user';
import { Mail } from '../mail';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()
export class HttpService{

  constructor(private http: Http){ }

  getData(){
    return this.http.get('http://localhost:8081/api/news')
    //return this.http.get('http://192.168.2.195:8081/api/news')
  }
  getSelectData(id: String){
    return this.http.get('http://localhost:8081/api/news/'+id)
    //return this.http.get('http://192.168.2.195:8081/api/news/'+id)
  }

    postMail(mail: Mail){
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            var params = new URLSearchParams();
            params.set('name', mail.name);
            params.set('email', mail.email);
            params.set('phone', mail.phone);
            params.set('theme', mail.theme);
            params.set('text', mail.text);
            return this.http.post('http://localhost:8081/api/mail', params.toString(), { headers: headers })
            //return this.http.post('http://192.168.2.195:8081/api/mail', params.toString(), { headers: headers })
                            .map(res => res.json())
                            .catch((error:any) =>{return Observable.throw(error);});;
         }




  postData(obj: User){
        const body = JSON.stringify(obj);

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:8081/api/authenticate/', body, {headers: headers})
        //return this.http.post('http://192.168.2.195:8081/api/authenticate/', body, {headers: headers})
                        .map((resp:Response)=>
                        console.log(resp.json()))
                        .catch((error:any) =>{return Observable.throw(error);});
    }
}
