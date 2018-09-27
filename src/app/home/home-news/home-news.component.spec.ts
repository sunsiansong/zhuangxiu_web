import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsComponent } from './home-news.component';
import { MaterialModule } from '../../material.module';
import { MOCK_POSTS_NEWS } from '../../../test/example.data';

describe('HomeNewsComponent', () => {
  let component: HomeNewsComponent;
  let fixture: ComponentFixture<HomeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNewsComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('测试ui', () => {
    const news = MOCK_POSTS_NEWS.slice(3);
    news[0].topped = true;
    component.news = news;


    fixture.detectChanges();
    const ele: HTMLElement = fixture.nativeElement;
    const textContent = ele.textContent;

    const uiEle = ele.querySelector('mat-list');
    // console.log('TEXT::' + uiEle.textContent);
    expect(uiEle.childElementCount).toBe(news.length);


    news.forEach((n) => {
      expect(textContent).toContain(n.title);
    });
    expect(textContent).toContain('【置顶】');
  });
});
