import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { Config } from '../common/model/config.model';
import { DATA_SERVICE } from '../const.instance';
import { PageDataService } from '../service/page-data.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  state: any = {};

  // @ViewChild('infoHref') infoHref: ElementRef;
  // @ViewChild('teamHref') teamHref: ElementRef;
  // @ViewChild('cultureHref') cultureHref: ElementRef;
  // @ViewChild('addressHref') addressHref: ElementRef;
  // @ViewChild('jobsHref') jobsHref: ElementRef;

  constructor(@Inject(DATA_SERVICE) private dataService: PageDataService) { }

  ngOnInit() {
    this.dataService.aboutPageData()
      .subscribe(res => this.state = res, err => alert('err'), () => console.log('about page fetch data done') );

      setTimeout(() => {
        // this.jobsHref.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 2000);
  }

  scrollTo(e) {
    e.scrollIntoView({ behavior: "smooth", block: "start" });
  }

}
