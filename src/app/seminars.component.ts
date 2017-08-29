/**
 * Created by zaur on 08.05.17.
 */
import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { Response } from '@angular/http';
import { News } from './news';

@Component({
  selector: 'seminars-app',
  templateUrl: './seminars.component.html',
  providers: [HttpService]
})

export class SeminarsComponent{
}
