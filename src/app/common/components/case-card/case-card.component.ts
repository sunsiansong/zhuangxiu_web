import { Component, OnInit, Input } from '@angular/core';
import { Case } from '../../model/case.model';

@Component({
  selector: 'app-case-card',
  templateUrl: './case-card.component.html',
  styleUrls: ['./case-card.component.scss'],
})
export class CaseCardComponent implements OnInit {

  @Input()
  case: Case;

  constructor() { }

  ngOnInit() {
  }

}
