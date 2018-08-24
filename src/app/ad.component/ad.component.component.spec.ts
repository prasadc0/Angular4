import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ad.ComponentComponent } from './ad.component.component';

describe('Ad.ComponentComponent', () => {
  let component: Ad.ComponentComponent;
  let fixture: ComponentFixture<Ad.ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ad.ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ad.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
