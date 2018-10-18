import { Component, OnInit, Input } from '@angular/core';
import { Post } from '@local/frontend-api-spec';

@Component({
  selector: 'app-home-articles',
  templateUrl: './home-articles.component.html',
  styleUrls: ['home-articles.component.scss']
})
export class HomeArticlesComponent implements OnInit {

  @Input()
  articles: Post[];

  constructor() { }

  ngOnInit() {
  }

}
