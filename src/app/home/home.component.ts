import {Component, OnInit, Inject} from '@angular/core';
import { Case } from '../common/model/case.model';
import { Post } from '../common/model/post.model';
import { Config } from '../common/model/config.model';
import { PageDataService } from '../service/page-data.service';
import { DATA_SERVICE } from '../const.instance';

export interface HomeState {
  now: Date;
  cases: Case[];
  newsPosts: Post[];
  articlePosts: Post[];
  configs: {[key: string]: Config};
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  public message: string;

  state: HomeState;

  constructor(@Inject(DATA_SERVICE) private pageDataService: PageDataService) {}

  ngOnInit() {
    this.message = 'Hello';
    this.pageDataService.homeData()
      .subscribe(data => this.state = data, err => alert('homeDataErr'));
  }

  onBtnClick() {
     alert(233);
  }
}
