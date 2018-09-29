import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CasesListComponent } from "./cases-list.component";
import { CaseCardComponent } from "../common/components/case-card/case-card.component";
import { TestImportModule } from "../test-import.module";
import { PageDataService } from "../service/page-data.service";
import { MockPageDataService } from "../service/__mock__/page-data.service.mock";

describe("CasesListComponent", () => {
  let component: CasesListComponent;
  let fixture: ComponentFixture<CasesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CasesListComponent, CaseCardComponent],
      providers: [
        { provide: PageDataService, useClass: MockPageDataService },
      ],
      imports: [TestImportModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be able to new', () => {
    expect(new CasesListComponent(null)).toBeTruthy();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
