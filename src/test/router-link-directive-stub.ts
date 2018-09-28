import { Directive, Input } from "@angular/core";

@Directive({
  selector: "[routerLink]",
  host: { "(click)": "onClick()" }
})
// tslint:disable-next-line:directive-class-suffix
export class RouterLinkDirectiveStub {
  @Input("routerLink")
  linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}
