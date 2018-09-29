import { PageDataService } from "../page-data.service";
import { HomeState } from "../../home/home.component";
import { Observable, of } from "rxjs";
import {
  MOCK_CASES,
  MOCK_POSTS_NEWS,
  MOCK_POSTS_ARTICLES,
  MOCK_CONFIG_MAP
} from "../../../test/example.data";
import { CasesCompData } from "../../cases-list/cases-list.component";
import { Injectable } from "@angular/core";
import { PostsPageData } from "../../posts-list/posts-list.component";

export class MockPageDataService implements PageDataService {
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
      configs: MOCK_CONFIG_MAP
    };
    console.info("mock home data invoked");
    return of(state);
  }
}
