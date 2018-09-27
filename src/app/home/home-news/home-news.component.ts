import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {

  @Input()
  news: any[];
  @Input()
  now: Date;

  constructor() { }

  ngOnInit() {
    console.info('news:', this.news);
  }

}
