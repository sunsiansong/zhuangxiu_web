import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PageDataService } from './service/page-data.service';
import { MockPageDataService } from './service/__mock__/page-data.service.mock';
import { RouterLinkDirectiveStub } from './../test/router-link-directive-stub';
import { DATA_SERVICE } from './const.instance';


@NgModule({
  imports: [
    CommonModule, FormsModule, MaterialModule, NoopAnimationsModule, RouterModule.forRoot([])
  ],
  exports: [RouterLinkDirectiveStub, MaterialModule, FormsModule],
  providers: [
    { provide: DATA_SERVICE, useClass: MockPageDataService },
    { provide: APP_BASE_HREF, useValue: '/'}
  ],
  declarations: [RouterLinkDirectiveStub]
})
export class TestImportModule { }
