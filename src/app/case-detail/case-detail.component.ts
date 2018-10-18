import { Component, OnInit, Inject } from '@angular/core';
import { Router, Route, RouterLinkActive, ActivatedRoute } from '@angular/router';


import { map } from 'rxjs/operators';


import { DATA_SERVICE } from '../const.instance';
import { PageDataService, Case } from '@local/frontend-api-spec';
import { Fn } from '../common/utils/fn.util';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss']
})
export class CaseDetailComponent implements OnInit {

  case: Case;

  constructor(
    private route: ActivatedRoute,
    @Inject(DATA_SERVICE) private dataService: PageDataService
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(map(x => x.id))
      .subscribe(id => {
        this.dataService.getCaseDetail(id)
          .subscribe(x => this.case = x, err => alert('err'), () => Fn.done);
      });
  }

}
