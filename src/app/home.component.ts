import {Component} from "@angular/core";
import { NgForm} from '@angular/forms';
import { Mail } from './mail';
import {HttpService} from './services/http.service';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  providers: [HttpService]
})

export class HomeComponent{
   mail: Mail =  new Mail();
   message:string;
  constructor(private httpService: HttpService){}
  submit(mail){
        console.log(this.mail);
        this.httpService.postMail(mail).subscribe(
               data => {
                 // refresh the list
                 this.message = data.message;
                 return true;
               },
               error => {
                 console.error("Error saving food!");
                 return Observable.throw(error);
               });
    }
}
