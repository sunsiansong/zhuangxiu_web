import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesPageComponent } from './likes-page.component';
import { TestImportModule } from '../test-import.module';

describe('LikesPageComponent', () => {
  let component: LikesPageComponent;
  let fixture: ComponentFixture<LikesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesPageComponent ],
      imports: [TestImportModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
