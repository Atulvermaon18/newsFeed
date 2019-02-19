import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})
export class NewsFeedsComponent implements OnInit {

  newsData: any = [];
  listOfChild: any = [];
  count: any = 0;

  constructor(private service: APIServiceService) {
    console.log("Constructor Initiated")
  }

  ngOnInit() {
    console.log("Service call from component");
    this.service.getLatestNewsList().subscribe(result => {
      this.listOfChild = result;
      this.getChildNews();
    })
  }

  getChildNews() {
    if (this.count === this.listOfChild.length) {
      return
    } else {
      this.service.getNews(this.listOfChild[this.count]).subscribe(result => {
        debugger
        this.newsData.push(result);
        this.count++;
        this.getChildNews();
      })
    }

  }



}
