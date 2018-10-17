import { Component, OnInit, HostListener, HostBinding } from "@angular/core";
import { UiCenterService, UiEventType } from "../service/ui-center.service";
// tslint:disable-next-line:import-blacklist
import { filter } from "rxjs/operators";

/**
 * 代表一个透明（可点击穿透）的空间，当自身触发onmouseover时，自己的pointer-events: none;
 * 通过外部的机会再设置pointer-events为auto
 * TODO mobile 时最好能自动隐藏
 */
@Component({
  selector: "app-pc-trans-gutter",
  template: `<!-- no content, it just act as simple block, height width should be setting through outter component -->`,
  styles: [
    `
      :host {
        display: block;
        // background-color: rgba(255, 255, 255, 0.7);
      }
    `
  ]
})
export class TransparentGutterComponent implements OnInit {
  @HostBinding("style.pointer-events")
  pointerEvents: "auto" | "none" = "auto";

  constructor(private uiCenter: UiCenterService) {}

  ngOnInit() {
    // 激活滚动时设置pointerEvents
    this.uiCenter.events
      .pipe(filter(x => x.type === UiEventType.ACTIVE_TRANSPARENT_GUTTER))
      .subscribe(x => {
        this.pointerEvents = "auto";
        console.log("gutter becom alive");
      });
  }

  @HostListener("mousemove", ["$event"])
  onmousemove(e: MouseEvent) {
    const navBar: HTMLElement = document.getElementById("G_NAV_BAR");
    const { offsetTop, offsetHeight } = navBar;

    // 鼠标hover位置在导航条上时穿透点击
    if (offsetTop <= e.clientY && e.clientY <= offsetTop + offsetHeight) {
      this.uiCenter.events.next({ type: UiEventType.TRANSPARENT_GUTTER_DIE });
      this.pointerEvents = "none";
      console.log("one gutter died", navBar, e);
    } else {
      // console.log("mouseover gutter but not over navbar",
      // {offsetTop, offsetHeight, ...{topAndHeight: offsetTop + offsetHeight}, ...{clientY: e.clientY}});
    }
  }
}
