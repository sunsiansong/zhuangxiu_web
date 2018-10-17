import { Component, OnInit } from "@angular/core";
import { UiCenterService, UiEventType } from "./common/service/ui-center.service";
// tslint:disable-next-line:import-blacklist
import { filter } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent implements OnInit {

  mainAreaPointEvents = 'auto';

  constructor(private uiCenter: UiCenterService) {}

  ngOnInit(): void {
    this.uiCenter.events
    .subscribe(x => {
      switch (x.type) {
        case UiEventType.TRANSPARENT_GUTTER_DIE:
        console.log('main die');
        this.mainAreaPointEvents = 'none';
        break;
        case UiEventType.ACTIVE_TRANSPARENT_GUTTER:
        console.log('main become alive');
        this.mainAreaPointEvents = 'auto';
        break;

      }
    });
  }
}
