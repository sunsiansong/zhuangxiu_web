import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../common/model/post.model';

@Component({
  selector: 'app-home-artiles',
  templateUrl: './home-articles.component.html',
  styles: []
})
export class HomeArtilesComponent implements OnInit {

  @Input()
  articles: Post[];

  constructor() { }

  ngOnInit() {
  }

}
