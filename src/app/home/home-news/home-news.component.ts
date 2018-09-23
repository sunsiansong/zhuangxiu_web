import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styles: []
})
export class HomeNewsComponent implements OnInit {

  @Input()
  news: any[];

  constructor() { }

  ngOnInit() {
  }

}
