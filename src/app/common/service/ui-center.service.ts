import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export enum UiEventType {
  TRANSPARENT_GUTTER_DIE,
  ACTIVE_TRANSPARENT_GUTTER
}

export interface UiEvent<T> {
  type: UiEventType;
  val?: T;
}

/**
 * 多个组件在复杂结构中通信使用
 */
@Injectable({
  providedIn: "root"
})
export class UiCenterService {
  /** UI事件中心 */
  public events: Subject<UiEvent<any>> = new Subject();

  constructor() {}

  activeMainScroll() {
    this.events.next({
      type: UiEventType.ACTIVE_TRANSPARENT_GUTTER
    });
  }
}
