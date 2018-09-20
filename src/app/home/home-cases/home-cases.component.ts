import { Component, OnInit, Input } from '@angular/core';
import { Case } from '../../common/model/case';

@Component({
  selector: 'app-home-cases',
  templateUrl: 'home-cases.component.html',
  styleUrls: ['home-cases.component.css'],
})
export class HomeCasesComponent implements OnInit {

  @Input()
  cases: Case[];

  constructor() { }

  ngOnInit() {
    if (!this.cases || this.cases.length === 0) {
      this.fetchHomeCases();
    }
  }

  fetchHomeCases() {
    // TODO service
    this.cases = <any>[{}, {}];
  }

}
