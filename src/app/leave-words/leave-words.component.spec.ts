import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveWordsComponent } from './leave-words.component';

describe('LeaveWordsComponent', () => {
  let component: LeaveWordsComponent;
  let fixture: ComponentFixture<LeaveWordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveWordsComponent ]
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
