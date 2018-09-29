import { PageDataService } from '../page-data.service';
import { Observable } from 'rxjs';
import { HomeState } from '../../home/home.component';
import { CasesCompData } from '../../cases-list/cases-list.component';
import { PostsPageData } from '../../posts-list/posts-list.component';
import { Injectable } from '@angular/core';

export class PageDataImplServie implements PageDataService {
    postsPageData(): Observable<PostsPageData> {
        throw new Error("Method not implemented.");
    }
    casesListData(): Observable<CasesCompData> {
        throw new Error("Method not implemented.");
    }
    homeData(): Observable<HomeState> {
        throw new Error('Method not implemented.');
    }

}
