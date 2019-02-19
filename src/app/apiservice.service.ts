import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  devEndpoint: String = 'https://hacker-news.firebaseio.com/v0/item/';

  newsData: any = {};

  constructor(private http: HttpClient) { }

  getLatestNewsList() {
    console.log("Service call from component");
    return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json', { headers: this.headers })
  }

  getNews(url) {
    return this.http.get(this.devEndpoint + url + '.json?print=pretty', { headers: this.headers });
  }

}
