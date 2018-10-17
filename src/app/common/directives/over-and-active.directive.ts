import { Directive, HostListener, Inject } from '@angular/core';
import { UiCenterService } from '../service/ui-center.service';
import { DOCUMENT } from '@angular/common';


/** 组件mouseover触发时激活main滚动 */
@Directive({
  selector: '[appOverAndActive]'
})
export class OverAndActiveDirective {

  constructor(
    private uiService: UiCenterService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  @HostListener('mouseover', ['$event.target'])
  onmouseover(comp) {
    const w = this.doc.getElementById('main-wraper');
    // console.log('mainWraper w.style.pointerEvents', w.style.pointerEvents);
    if (w.style.pointerEvents === 'none') {
      this.uiService.activeMainScroll();
    }
  }

}
