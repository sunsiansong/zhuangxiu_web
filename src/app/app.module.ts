import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Provider } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { MaterialModule } from "./material.module";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeCasesComponent } from "./home/home-cases/home-cases.component";
import { CaseCardComponent } from "./common/components/case-card/case-card.component";
import { HomeBannerComponent } from "./home/home-banner/home-banner.component";
import { HomeNewsComponent } from "./home/home-news/home-news.component";
import { MockPageDataService } from "./service/__mock__/page-data.service.mock";
import { PageDataImplServie } from "./service/impl/page-data.impl.service";
import { PageDataService } from "./service/page-data.service";
import { HomeArtilesComponent } from "./home/home-artiles/home-artiles.component";
import { environment } from "../environments/environment";
import { ReadableDatePipe } from "./common/pipes/readable-date.pipe";
import { ContactUsComponent } from "./footer/contact-us/contact-us.component";
import { AppRoutingModule } from './app-routing.module';
import { CasesListComponent } from './cases-list/cases-list.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { LikesPageComponent } from './likes-page/likes-page.component';

const serviceProviders: Provider[] = environment.mockService
  ? [{ provide: PageDataService, useClass: MockPageDataService }]
  : [{ provide: PageDataService, useClass: PageDataImplServie }];

@NgModule({
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
    HomeArtilesComponent,
    ContactUsComponent,
    CasesListComponent,
    PostsListComponent,
    MessagesListComponent,
    AboutPageComponent,
    CaseDetailComponent,
    PostDetailComponent,
    LikesPageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "my-app" }),
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    RouterModule.forRoot([
      { path: "lazy", loadChildren: "./lazy/lazy.module#LazyModule" },
      { path: "lazy/nested", loadChildren: "./lazy/lazy.module#LazyModule" }
    ]),
    TransferHttpCacheModule,
    AppRoutingModule
  ],
  providers: serviceProviders,
  bootstrap: [AppComponent]
})
export class AppModule {}
