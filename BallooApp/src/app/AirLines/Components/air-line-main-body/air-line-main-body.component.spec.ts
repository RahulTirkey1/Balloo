import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirLineMainBodyComponent } from './air-line-main-body.component';

describe('AirLineMainBodyComponent', () => {
  let component: AirLineMainBodyComponent;
  let fixture: ComponentFixture<AirLineMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirLineMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirLineMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
