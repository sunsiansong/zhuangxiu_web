import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: 'home-banner.component.html',
  styles: []
})
export class HomeBannerComponent implements OnInit {


  @Input()
  slogan: string;
  @Input()
  bgImgSrc: string;

  constructor() { }

  ngOnInit() {
  }

}
