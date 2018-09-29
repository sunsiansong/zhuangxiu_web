import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelPostsComponent } from './channel-posts.component';
import { TestImportModule } from '../../test-import.module';

describe('ChannelPostsComponent', () => {
  let component: ChannelPostsComponent;
  let fixture: ComponentFixture<ChannelPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelPostsComponent ],
      imports: [TestImportModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
