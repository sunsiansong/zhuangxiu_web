import { Injectable } from '@angular/core';
import { HomeState } from '../home/home.component';
import { Observable } from 'rxjs';
import { PageData } from '../common/model/page.model';
import { Case } from '../common/model/case.model';
import { CasesCompData } from '../cases-list/cases-list.component';

@Injectable()
export abstract class PageDataService {
  abstract homeData(): Observable<HomeState>;

  abstract casesListData(): Observable<CasesCompData>;
}
