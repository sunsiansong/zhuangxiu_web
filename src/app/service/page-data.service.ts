import { Injectable } from '@angular/core';
import { HomeState } from '../home/home.component';
import { Observable } from 'rxjs';
import { PageData } from '../common/model/page.model';
import { Case } from '../common/model/case.model';
import { CasesCompData } from '../cases-list/cases-list.component';
import { PostsPageData } from '../posts-list/posts-list.component';

export interface PageDataService {
  homeData(): Observable<HomeState>;

  casesListData(): Observable<CasesCompData>;

  postsPageData(): Observable<PostsPageData>;

  aboutPageData(): Observable<any>;
}
