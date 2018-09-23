import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeArtilesComponent } from './home-artiles.component';

describe('HomeArtilesComponent', () => {
  let component: HomeArtilesComponent;
  let fixture: ComponentFixture<HomeArtilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeArtilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeArtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
