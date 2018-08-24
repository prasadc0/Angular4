import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RtvdetailscompComponent } from './rtvdetailscomp.component';

describe('RtvdetailscompComponent', () => {
  let component: RtvdetailscompComponent;
  let fixture: ComponentFixture<RtvdetailscompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtvdetailscompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RtvdetailscompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
