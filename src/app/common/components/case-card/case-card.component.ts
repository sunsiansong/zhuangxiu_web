import { Component, OnInit, Input } from '@angular/core';
import { Case } from '../../model/case';

@Component({
  selector: 'app-case-card',
  template: `
    <p>
      case-card works!
    </p>
  `,
  styles: []
})
export class CaseCardComponent implements OnInit {

  @Input()
  case: Case;

  constructor() { }

  ngOnInit() {
  }

}
