import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { DATA_SERVICE } from '../const.instance';
import { PageDataService } from '../service/page-data.service';
import { UserLike } from '../common/model/like.model';

@Component({
  selector: 'app-likes-page',
  templateUrl: './likes-page.component.html',
  styleUrls: ['./likes-page.component.css']
})
export class LikesPageComponent implements OnInit {

  likes: UserLike[] = [];
  displayedColumns: string[] = ['title', 'createTime', 'type', 'actions'];

  constructor(
    @Inject(DATA_SERVICE) private dataService: PageDataService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.dataService.userLikes()
      .subscribe(
        res => this.likes = res,
        err => alert('err'),
        () => console.log('likes page fetch data done')
      );
  }

  createShareUrl() {
    // TODO copy to clip board
    this.snackBar.open('分享链接已复制到剪贴板，链接一周内有效 https://xxx.com/likes?shareId=666', 'ok', {
      duration: 5000
    });
  }
}
