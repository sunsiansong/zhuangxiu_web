import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterModule } from '@angular/router';
import { MyModule } from '../../my/my.module';
import { TestImportModule } from '../../test-import/test-import.module';
import { HomeArticlesComponent } from './home-articles.component';

describe('HomeArticlesComponent', () => {
  let component: HomeArticlesComponent;
  let fixture: ComponentFixture<HomeArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArticlesComponent ],
      imports: [TestImportModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
