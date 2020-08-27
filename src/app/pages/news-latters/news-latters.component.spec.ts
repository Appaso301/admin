import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsLattersComponent } from './news-latters.component';

describe('NewsLattersComponent', () => {
  let component: NewsLattersComponent;
  let fixture: ComponentFixture<NewsLattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsLattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
