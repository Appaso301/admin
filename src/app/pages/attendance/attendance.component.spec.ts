import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ATTENDANCEComponent } from './attendance.component';

describe('ATTENDANCEComponent', () => {
  let component: ATTENDANCEComponent;
  let fixture: ComponentFixture<ATTENDANCEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ATTENDANCEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ATTENDANCEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
