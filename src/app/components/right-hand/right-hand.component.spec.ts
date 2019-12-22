import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightHandComponent } from './right-hand.component';

describe('RightHandComponent', () => {
  let component: RightHandComponent;
  let fixture: ComponentFixture<RightHandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightHandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightHandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
