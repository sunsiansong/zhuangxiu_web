import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { NgModule, Provider, InjectionToken } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material";

import { ClipboardModule } from 'ngx-clipboard';

import { MatPaginatorIntlService } from "./service/mat-paginator-intl.impl.service";
import { environment } from "../environments/environment";
import { MockPageDataService } from "./service/__mock__/page-data.service.mock";
import { PageDataImplServie } from "./service/impl/page-data.impl.service";
import { CommonModule } from "@angular/common";
import { ReadableDatePipe } from "./common/pipes/readable-date.pipe";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeCasesComponent } from "./home/home-cases/home-cases.component";
import { CaseCardComponent } from "./common/components/case-card/case-card.component";
import { HomeBannerComponent } from "./home/home-banner/home-banner.component";
import { HomeNewsComponent } from "./home/home-news/home-news.component";
import { ContactUsComponent } from "./footer/contact-us/contact-us.component";
import { CasesListComponent } from "./cases-list/cases-list.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { CaseDetailComponent } from "./case-detail/case-detail.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { LikesPageComponent } from "./likes-page/likes-page.component";
import { MaterialModule } from "./material.module";
import { AppRoutingModule } from "./app-routing.module";
import { HomeArticlesComponent } from "./home/home-articles/home-articles.component";
import { ChannelPostsComponent } from "./posts-list/channel-posts/channel-posts.component";
import { LeaveWordsComponent } from "./leave-words/leave-words.component";
import { DATA_SERVICE } from "./const.instance";
import { TransparentGutterComponent } from "./common/components/transparent-gutter.component";
import { UiCenterService } from "./common/service/ui-center.service";
import { OverAndActiveDirective } from "./common/directives/over-and-active.directive";
import { TechSupportComponent } from './tech-support/tech-support.component';

const basicServiceProviders: Provider[] = [
  { provide: MatPaginatorIntl, useClass: MatPaginatorIntlService }
];

const optionalServiceProviders = environment.mockService
  ? [{ provide: DATA_SERVICE, useClass: MockPageDataService }]
  : [{ provide: DATA_SERVICE, useClass: PageDataImplServie }];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    ClipboardModule
  ],
  declarations: [
    // pipes
    ReadableDatePipe,
    // components
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    HomeCasesComponent,
    CaseCardComponent,
    HomeBannerComponent,
    HomeNewsComponent,
    HomeArticlesComponent,
    ContactUsComponent,
    CasesListComponent,
    PostsListComponent,
    AboutPageComponent,
    CaseDetailComponent,
    PostDetailComponent,
    LikesPageComponent,
    ChannelPostsComponent,
    LeaveWordsComponent,
    TransparentGutterComponent,
    OverAndActiveDirective,
    TechSupportComponent
  ],
  exports: [MaterialModule],
  providers: [
    ...basicServiceProviders,
    ...optionalServiceProviders,
    UiCenterService
  ]
})
export class MyModule {}
