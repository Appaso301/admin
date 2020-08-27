import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnancementComponent } from './annancement.component';

describe('AnnancementComponent', () => {
  let component: AnnancementComponent;
  let fixture: ComponentFixture<AnnancementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnancementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
