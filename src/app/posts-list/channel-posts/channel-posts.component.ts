import { Component, OnInit, Input } from '@angular/core';
import { PageData } from '../../common/model/page.model';
import { Post } from '../../common/model/post.model';

/** 栏目/频道数据 */
export interface ChannelData {
  name: string;
  page: PageData<Post>;
}

@Component({
  selector: 'app-channel-posts',
  templateUrl: './channel-posts.component.html',
  styleUrls: ['./channel-posts.component.css']
})
export class ChannelPostsComponent implements OnInit {

  @Input()
  channel: ChannelData;

  constructor() { }

  ngOnInit() {
  }

  pageChange(e: any) {
    console.log('channel page change');
  }

}
