import { Component, OnInit, Inject } from "@angular/core";
import { PageDataService, Case, Post, Config, HomeState } from "@local/frontend-api-spec";
import { DATA_SERVICE } from "../const.instance";
import { UiCenterService, UiEventType } from "../common/service/ui-center.service";
import { filter } from "rxjs/operators";


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
