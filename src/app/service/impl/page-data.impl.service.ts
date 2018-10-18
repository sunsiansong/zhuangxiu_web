import { PageDataService, Config, UserLike, ContactInfo, PostsPageData, CasesCompData, HomeState } from "@local/frontend-api-spec";
import { Observable } from "rxjs";

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
