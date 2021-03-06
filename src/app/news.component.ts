/**
 * Created by zaur on 08.05.17.
 */
import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';
import { Response } from '@angular/http';
import { News } from './news';

@Component({
  selector: 'news-app',
  templateUrl: './news.component.html',
  styleUrls: ['news.component.css'],
  providers: [HttpService]
})

export class NewsComponent implements OnInit{
  news: News[]=[];
  selectNews: News;
  constructor(private httpService: HttpService){

  }

  ngOnInit(){
    this.httpService.getData().subscribe((data: Response) => this.news=data.json().news);
  }

  selectNewss(id: String){
    this.httpService.getSelectData(id).subscribe((data: Response) => this.selectNews=data.json().news);
  }
  foo(){
  alert('foo');
}
}
