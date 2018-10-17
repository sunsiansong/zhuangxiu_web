import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Config } from '../common/model/config.model';
import { DATA_SERVICE } from '../const.instance';
import { PageDataService } from '../service/page-data.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  state: any = {};

  constructor(@Inject(DATA_SERVICE) private dataService: PageDataService) { }

  ngOnInit() {
    this.dataService.aboutPageData()
      .subscribe(res => this.state = res, err => alert('err'), () => console.log('about page fetch data done') );
  }

  scrollTo(e) {
    e.scrollIntoView({ behavior: "smooth", block: "start" });
  }

}
