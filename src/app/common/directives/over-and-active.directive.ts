import { Directive, HostListener } from '@angular/core';
import { UiCenterService } from '../service/ui-center.service';


/** 组件mouseover触发时激活main滚动 */
@Directive({
  selector: '[appOverAndActive]'
})
export class OverAndActiveDirective {

  constructor(
    private uiService: UiCenterService
  ) { }

  @HostListener('mouseover', ['$event.target'])
  onmouseover(comp) {
    this.uiService.activeMainScroll();
  }

}
