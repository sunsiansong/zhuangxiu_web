import { Component, OnInit, Inject } from '@angular/core';
import { PageData } from '../common/model/page.model';
import { Post } from '../common/model/post.model';
import { PageDataService } from '../service/page-data.service';
import { ChannelData } from './channel-posts/channel-posts.component';
import { MockPageDataService } from '../service/__mock__/page-data.service.mock';
import { DATA_SERVICE } from '../const.instance';

export interface PostsCompState {
  data?: PostsPageData;
}

export interface PostsPageData {
  now: Date;
  channels: ChannelData[];
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
