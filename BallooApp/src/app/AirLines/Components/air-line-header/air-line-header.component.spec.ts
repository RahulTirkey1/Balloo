import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirLineHeaderComponent } from './air-line-header.component';

describe('AirLineHeaderComponent', () => {
  let component: AirLineHeaderComponent;
  let fixture: ComponentFixture<AirLineHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirLineHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirLineHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
