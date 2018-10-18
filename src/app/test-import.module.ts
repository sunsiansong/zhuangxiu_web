import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PageDataService } from '@local/frontend-api-spec';
import { MockPageDataService } from './service/__mock__/page-data.service.mock';
import { RouterLinkDirectiveStub } from './../test/router-link-directive-stub';
import { DATA_SERVICE } from './const.instance';
import { UiCenterService } from './common/service/ui-center.service';


@NgModule({
  imports: [
    CommonModule, FormsModule, MaterialModule, NoopAnimationsModule, RouterModule.forRoot([])
  ],
  exports: [RouterLinkDirectiveStub, MaterialModule, FormsModule],
  providers: [
    { provide: DATA_SERVICE, useClass: MockPageDataService },
    { provide: APP_BASE_HREF, useValue: '/'},
    UiCenterService
  ],
  declarations: [RouterLinkDirectiveStub]
})
export class TestImportModule { }
