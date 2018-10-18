import { Component, OnInit, Input } from '@angular/core';
import { PageData, Post, ChannelData } from '@local/frontend-api-spec';

/** 栏目/频道数据 */
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
