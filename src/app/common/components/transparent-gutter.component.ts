import { Component, OnInit, HostListener, HostBinding } from "@angular/core";
import { UiCenterService, UiEventType } from "../service/ui-center.service";
// tslint:disable-next-line:import-blacklist
import { filter } from "rxjs/operators";

/**
 * 代表一个透明（可点击穿透）的空间，当自身触发onmouseover时，自己的pointer-events: none;
 * 通过外部的机会再设置pointer-events为auto
 */
@Component({
  selector: "app-pc-trans-gutter",
  template: `<!-- no content, it just act as simple block, height width should be setting through outter component -->`,
  styles: [
    `
      :host {
        display: block;
        // background-color: rgba(100, 0, 100, 0.2);
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

  @HostListener("mouseover", ["$event"])
  onmouseover(e: MouseEvent) {
    const navBar: HTMLElement = document.getElementById("G_NAV_BAR");
    const { offsetTop, offsetHeight } = navBar;

    // 鼠标hover位置在导航条上时穿透点击
    // TODO 当穿透层和导航条不完全重叠，进入区木、不满足这个条件，需要优化这里的体验、算法，否则就出现偏差。
    const reduantOffset = 15; // 冗余10px
    if (offsetTop - reduantOffset <= e.clientY && e.clientY <= offsetTop + offsetHeight + reduantOffset) {
      this.uiCenter.events.next({ type: UiEventType.TRANSPARENT_GUTTER_DIE });
      this.pointerEvents = "none";
      console.log("one gutter died", navBar, e);
    } else {
      console.log("mouseover gutter but not over navbar",
      {offsetTop, offsetHeight, ...{topAndHeight: offsetTop + offsetHeight}, ...{clientY: e.clientY}});
    }
  }
}
