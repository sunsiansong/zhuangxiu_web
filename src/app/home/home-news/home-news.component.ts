import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news',
  template: `
    <p>
      home-news works!
    </p>
    <ul>
      <li *ngFor="let i of news">{{i}}</li>
    </ul>
  `,
  styles: []
})
export class HomeNewsComponent implements OnInit {

  news: any[];

  constructor() { }

  ngOnInit() {
    this.news = [1, 2];
  }

}
