import { PageDataService } from '../page-data.service';
import { Observable } from 'rxjs';
import { HomeState } from '../../home/home.component';

export class PageDataImplServie extends PageDataService {
    homeData(): Observable<HomeState> {
        throw new Error('Method not implemented.');
    }

}
