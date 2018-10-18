import { Component, OnInit, Inject } from '@angular/core';
import { PageDataService, PostsPageData } from '@local/frontend-api-spec';
import { DATA_SERVICE } from '../const.instance';

export interface PostsCompState {
  data?: PostsPageData;
}



@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  state: PostsCompState = {};
  constructor(@Inject(DATA_SERVICE) private dataService: PageDataService) {
   }

  ngOnInit() {
    this.dataService.postsPageData()
      .subscribe(res => {
        this.state.data = res;
      }, err => {
        alert('TODO retry and notice user');
      }, () => {
        console.log('done:fetch page data');
      });
  }

}
