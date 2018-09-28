import { PageDataService } from '../page-data.service';
import { Observable } from 'rxjs';
import { HomeState } from '../../home/home.component';
import { CasesCompData } from '../../cases-list/cases-list.component';

export class PageDataImplServie extends PageDataService {
    casesListData(): Observable<CasesCompData> {
        throw new Error("Method not implemented.");
    }
    homeData(): Observable<HomeState> {
        throw new Error('Method not implemented.');
    }

}
