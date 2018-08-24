import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferNavigateComponent } from './transfer-navigate.component';

describe('TransferNavigateComponent', () => {
  let component: TransferNavigateComponent;
  let fixture: ComponentFixture<TransferNavigateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferNavigateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
