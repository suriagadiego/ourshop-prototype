import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupAirportComponent } from './pickup-airport.component';

describe('PickupAirportComponent', () => {
  let component: PickupAirportComponent;
  let fixture: ComponentFixture<PickupAirportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupAirportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupAirportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
