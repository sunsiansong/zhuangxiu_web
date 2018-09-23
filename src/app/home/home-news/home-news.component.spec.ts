import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewsComponent } from './home-news.component';

describe('HomeNewsComponent', () => {
  let component: HomeNewsComponent;
  let fixture: ComponentFixture<HomeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNewsComponent ]
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

  it('测试jest与angular的整合：组件测试', () => {
    expect(component.news.length).toBe(2);
  });

  it('测试ui', () => {
    const ul: HTMLElement = fixture.nativeElement;
    const uiEle = ul.querySelector('ul');
    console.log('TEXT::' + uiEle.textContent);
    expect(uiEle.childElementCount).toBe(2);
  });
});
