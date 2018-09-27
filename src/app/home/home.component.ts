import {Component, OnInit} from '@angular/core';
import { Case } from '../common/model/case.model';
import { Post } from '../common/model/post.model';
import { Config } from '../common/model/config.model';
import { PageDataService } from '../service/page-data.service';

export interface HomeState {
  now: Date;
  cases: Case[];
  newsPosts: Post[];
  articlePosts: Post[];
  configs: {[key: string]: string};
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  public message: string;

  state: HomeState;

  constructor(private dataService: PageDataService) {}

  ngOnInit() {
    this.message = 'Hello';
    this.dataService.homeData()
      .subscribe(data => this.state = data, err => alert('homeDataErr'));
  }

  onBtnClick() {
     alert(233);
  }
}
