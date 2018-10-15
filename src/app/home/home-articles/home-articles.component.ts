import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../common/model/post.model';

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
