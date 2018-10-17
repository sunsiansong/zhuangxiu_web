import { PageDataService } from "../page-data.service";
import { HomeState } from "../../home/home.component";
import { Observable, of, throwError } from "rxjs";
import {
  MOCK_CASES,
  MOCK_POSTS_NEWS,
  MOCK_POSTS_ARTICLES,
  MOCK_CONFIGS,
  MOCK_USER_LIKES,
  MOCK_CASE_DETAIL
} from "../../../test/example.data";
import { CasesCompData } from "../../cases-list/cases-list.component";
import { Injectable } from "@angular/core";
import { PostsPageData } from "../../posts-list/posts-list.component";
import { Config } from "../../common/model/config.model";
import { UserLike } from "../../common/model/like.model";
import { ContactInfo } from "../../footer/contact-us/contact-us.component";
import { Fn } from "../../common/utils/fn.util";
import { Case } from "../../common/model/case.model";

export class MockPageDataService implements PageDataService {
  getCaseDetail(id: number): Observable<Case> {
    return of(MOCK_CASE_DETAIL);
  }
  submitContactInfo(info: ContactInfo): Observable<any> {
    const t = new Date;
    if (t.getSeconds() % 4 > 1) {
      return throwError('模拟下网络异常');
    } else {
      return of('ok');
    }
  }

  configs(): Observable<{ [key: string]: Config; }> {
    return of(MOCK_CONFIGS);
  }
  aboutPageData(): Observable<any> {
    return of(MOCK_CONFIGS);
  }
  postsPageData(): Observable<PostsPageData> {
    return of({
      now: new Date,
      channels: [
        {
          name: '公司新闻/动态',
          page: {
            page: 1,
            pageSize: 5,
            length: 20,
            datas: MOCK_POSTS_NEWS
          }
        },
        {
          name: '装修知识',
          page: {
            page: 1,
            pageSize: 5,
            length: 20,
            datas: MOCK_POSTS_ARTICLES
          }
        },
      ]
    });
  }
  casesListData(): Observable<CasesCompData> {
    return of({
      page: {
        page: 1,
        pageSize: 5,
        length: 20,
        datas: MOCK_CASES.sort((a, b) => Fn.getRandomInt(2) % 2 === 0 ? 1 : -1)
      }
    });
  }

  constructor() {
    // console.log("mock service created");
  }

  homeData(): Observable<HomeState> {
    const state: HomeState = {
      now: new Date(),
      cases: MOCK_CASES,
      newsPosts: MOCK_POSTS_NEWS,
      articlePosts: MOCK_POSTS_ARTICLES,
      configs: MOCK_CONFIGS
    };
    console.info("mock home data invoked");
    return of(state);
  }

  userLikes(): Observable<UserLike[]> {
    return of(MOCK_USER_LIKES);
  }

}
