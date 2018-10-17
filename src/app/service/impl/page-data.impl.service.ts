import { PageDataService } from "../page-data.service";
import { Observable } from "rxjs";
import { HomeState } from "../../home/home.component";
import { CasesCompData } from "../../cases-list/cases-list.component";
import { PostsPageData } from "../../posts-list/posts-list.component";
import { Injectable } from "@angular/core";
import { Config } from "../../common/model/config.model";
import { UserLike } from "../../common/model/like.model";
import { ContactInfo } from "../../footer/contact-us/contact-us.component";

export class PageDataImplServie  {
// export class PageDataImplServie implements PageDataService {
  submitContactInfo(info: ContactInfo): Observable<any> {
    throw new Error("Method not implemented.");
  }
  aboutPageData(): Observable<any> {
    throw new Error("Method not implemented.");
  }
  postsPageData(): Observable<PostsPageData> {
    throw new Error("Method not implemented.");
  }
  casesListData(): Observable<CasesCompData> {
    throw new Error("Method not implemented.");
  }
  homeData(): Observable<HomeState> {
    throw new Error("Method not implemented.");
  }

  configs(): Observable<{ [key: string]: Config }> {
    throw new Error("Method not implemented.");
  }

  userLikes(): Observable<UserLike[]> {
    throw new Error("Method not implemented.");
  }
}
