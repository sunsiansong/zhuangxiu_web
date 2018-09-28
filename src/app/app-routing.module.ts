import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CasesListComponent } from "./cases-list/cases-list.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { MessagesListComponent } from "./messages-list/messages-list.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { CaseDetailComponent } from "./case-detail/case-detail.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { LikesPageComponent } from "./likes-page/likes-page.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },

  { path: "cases", component: CasesListComponent },
  { path: "cases/:id", component: CaseDetailComponent },

  { path: "posts", component: PostsListComponent },
  { path: "posts/:id", component: PostDetailComponent },

  { path: "messages", component: MessagesListComponent },
  { path: "about", component: AboutPageComponent },
  { path: "likes", component: LikesPageComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}