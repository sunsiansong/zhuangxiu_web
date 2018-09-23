import { PageDataService } from '../page-data.service';
import { HomeState } from '../../home/home.component';
import { Observable, of } from 'rxjs';
import { MOCK_CASES, MOCK_POSTS_NEWS, MOCK_POSTS_ARTICLES } from '../../../test/example.data';

export class MockPageDataService extends PageDataService {

    constructor() {
        super();
        console.log('mock service created');
    }

    homeData(): Observable<HomeState> {
        const state: HomeState = {
            cases: MOCK_CASES,
            newsPosts: MOCK_POSTS_NEWS,
            articlePosts: MOCK_POSTS_ARTICLES,
            configs: {
                slogan: `“装饰的灵魂是设计，
                设计的灵魂是文化,设计就是以人为本。
                遵守自然法则，缔造经典家装。”
                        -- 哥白尼2
                `
            }
        };
        console.info('mock home data invoked');
        return of(state);
    }

}
