import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveWordsComponent } from './leave-words.component';
import { TestImportModule } from '../test-import.module';
import { ReadableDatePipe } from '../common/pipes/readable-date.pipe';

describe('LeaveWordsComponent', () => {
  let component: LeaveWordsComponent;
  let fixture: ComponentFixture<LeaveWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveWordsComponent, ReadableDatePipe ],
      imports: [TestImportModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
