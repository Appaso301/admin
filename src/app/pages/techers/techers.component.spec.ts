import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechersComponent } from './techers.component';

describe('TechersComponent', () => {
  let component: TechersComponent;
  let fixture: ComponentFixture<TechersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
