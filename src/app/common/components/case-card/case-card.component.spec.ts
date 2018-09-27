import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseCardComponent } from './case-card.component';
import { MaterialModule } from '../../../material.module';
import { MOCK_CASES } from '../../../../test/example.data';

describe('CaseCardComponent', () => {
  let component: CaseCardComponent;
  let fixture: ComponentFixture<CaseCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseCardComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('需要显示出title', () => {
    const title = '233';
    component.case = {
      ...MOCK_CASES[0],
      ...{title}
    };
    fixture.detectChanges();
    const ele: HTMLElement = fixture.nativeElement;
    // console.log('CaseCard text:', ele.textContent);
    expect(ele.textContent).toContain(title);
  });
});
