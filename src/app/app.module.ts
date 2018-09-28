import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Provider } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { TransferHttpCacheModule } from "@nguniversal/common";
import { MyModule } from "./my/my.module";


@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule.withServerTransition({ appId: "my-app" }),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: "lazy", loadChildren: "./lazy/lazy.module#LazyModule" },
      { path: "lazy/nested", loadChildren: "./lazy/lazy.module#LazyModule" }
    ]),
    TransferHttpCacheModule,
    MyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
