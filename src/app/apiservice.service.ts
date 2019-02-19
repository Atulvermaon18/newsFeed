import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  devEndpoint: String = 'https://hacker-news.firebaseio.com/v0/item/';

  newsSource = [
    '160705.json?print=pretty',
    '192327.json?print=pretty',
    '121003.json?print=pretty',
    '8863.json?print=pretty'
  ];
  newsData: any = {};

  constructor(private http: HttpClient) { }

  //In case of joining all the data
  getLatestNews() {
    console.log("Service call from component")
    forkJoin(
      this.http.get(this.newsSource[0]),
      this.http.get(this.newsSource[1])
    ).subscribe(
      data => {
        this.newsData['article1'] = data[0]
        this.newsData['article2'] = data[1]
      },
      err => console.error(err)
    );
  }

  getNews(url) {
    return this.http.get(this.devEndpoint + url, { headers: this.headers });
  }

}
