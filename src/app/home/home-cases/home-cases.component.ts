import { Component, OnInit, Input } from '@angular/core';
import { Fn } from '../../common/utils/fn.util';
import { Case } from '@local/frontend-api-spec';

@Component({
  selector: 'app-home-cases',
  templateUrl: 'home-cases.component.html',
  styleUrls: ['home-cases.component.scss'],
})
export class HomeCasesComponent implements OnInit {

  @Input()
  cases: Case[];

  tileCols = 3;
  tiles: Case[][];

  constructor() { }

  ngOnInit() {
    this.tiles = Fn.calcTile(this.tileCols, this.cases);
  }

}
