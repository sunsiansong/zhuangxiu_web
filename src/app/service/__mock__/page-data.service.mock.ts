import { PageDataService } from "../page-data.service";
import { HomeState } from "../../home/home.component";
import { Observable, of } from "rxjs";
import {
  MOCK_CASES,
  MOCK_POSTS_NEWS,
  MOCK_POSTS_ARTICLES,
  MOCK_CONFIGS,
  MOCK_USER_LIKES
} from "../../../test/example.data";
import { CasesCompData } from "../../cases-list/cases-list.component";
import { Injectable } from "@angular/core";
import { PostsPageData } from "../../posts-list/posts-list.component";
import { Config } from "../../common/model/config.model";
import { UserLike } from "../../common/model/like.model";

export class MockPageDataService implements PageDataService {

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
        datas: MOCK_CASES
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
