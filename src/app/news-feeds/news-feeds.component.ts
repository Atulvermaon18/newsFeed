import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../apiservice.service';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})
export class NewsFeedsComponent implements OnInit {

  newsSource = [
    '121003.json?print=pretty',
    '192327.json?print=pretty',
    '121003.json?print=pretty',
    '2921983.json?print=pretty'
  ];
  newsData: any = {};

  constructor(private service: APIServiceService) {
    console.log("Constructor Initiated")
  }

  ngOnInit() {
    console.log("Service call from component")
    // this.service.getLatestNews();
    this.service.getNews(this.newsSource[0]).subscribe(article1 => {
      this.newsData['article1'] = article1;
      this.service.getNews(this.newsSource[1]).subscribe(article2 => {
        this.newsData['article2'] = article2;
        this.service.getNews(this.newsSource[2]).subscribe(article3 => {
          this.newsData['article3'] = article3;
          this.service.getNews(this.newsSource[3]).subscribe(article4 => {
            this.newsData['article4'] = article4;
          })
        })
      })
    }
    )
  }

}
