import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: 'home-banner.component.html',
  styleUrls: ['home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {


  @Input()
  slogan: string;
  @Input()
  bgImgSrc: string;

  constructor() { }

  ngOnInit() {
  }

  get bgImgUrl() {
    return `url(${this.bgImgSrc})`;
  }

}
