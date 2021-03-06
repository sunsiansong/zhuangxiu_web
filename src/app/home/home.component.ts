import { Component, OnInit, Inject } from "@angular/core";
import { Case } from "../common/model/case.model";
import { Post } from "../common/model/post.model";
import { Config } from "../common/model/config.model";
import { PageDataService } from "../service/page-data.service";
import { DATA_SERVICE } from "../const.instance";
import { UiCenterService, UiEventType } from "../common/service/ui-center.service";
import { filter } from "rxjs/operators";

export interface HomeState {
  now: Date;
  cases: Case[];
  newsPosts: Post[];
  articlePosts: Post[];
  configs: { [key: string]: Config };
}

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  state: HomeState;
  transGutterHeight = '30px';

  constructor(
    @Inject(DATA_SERVICE) private pageDataService: PageDataService,
    private uiCenter: UiCenterService
  ) {}

  ngOnInit() {
    this.pageDataService
      .homeData()
      .subscribe(data => (this.state = data), err => alert("homeDataErr"));
  }

  onBtnClick() {
    alert(233);
  }

  mouseover() {
    this.uiCenter.activeMainScroll();
  }
}
