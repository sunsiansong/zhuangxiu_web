import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CasesListComponent } from "./cases-list.component";
import { CaseCardComponent } from "../common/components/case-card/case-card.component";
import { TestImportModule } from "../test-import.module";

describe("CasesListComponent", () => {
  let component: CasesListComponent;
  let fixture: ComponentFixture<CasesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CasesListComponent, CaseCardComponent],
      providers: [
      ],
      imports: [TestImportModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
