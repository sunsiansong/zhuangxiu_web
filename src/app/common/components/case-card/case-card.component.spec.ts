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

  it('内容显示需要完整', () => {
    const c = MOCK_CASES[0];
    component.case = c;
    fixture.detectChanges();
    const ele: HTMLElement = fixture.nativeElement;

    const textContent = ele.textContent;
    expect(textContent)
      .toContain(c.title);
    expect(textContent).toContain(c.summary);
    c.tags.forEach((t, i) => {
      expect(textContent).toContain(t);
    });
    // expect(textContent).toContain('不存在的文本');

    const img: HTMLElement = ele.querySelector('img');
    expect(img.getAttribute('src')).toEqual(c.coverImageUrl);
  });
});
