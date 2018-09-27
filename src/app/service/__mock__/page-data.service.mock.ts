import { PageDataService } from '../page-data.service';
import { HomeState } from '../../home/home.component';
import { Observable, of } from 'rxjs';
import { MOCK_CASES, MOCK_POSTS_NEWS, MOCK_POSTS_ARTICLES, MOCK_CONFIG_MAP } from '../../../test/example.data';

export class MockPageDataService extends PageDataService {

    constructor() {
        super();
        console.log('mock service created');
    }

    homeData(): Observable<HomeState> {
        const state: HomeState = {
            now: new Date,
            cases: MOCK_CASES,
            newsPosts: MOCK_POSTS_NEWS,
            articlePosts: MOCK_POSTS_ARTICLES,
            configs: MOCK_CONFIG_MAP
        };
        console.info('mock home data invoked');
        return of(state);
    }

}
