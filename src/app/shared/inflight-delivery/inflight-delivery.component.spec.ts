import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflightDeliveryComponent } from './inflight-delivery.component';

describe('InflightDeliveryComponent', () => {
  let component: InflightDeliveryComponent;
  let fixture: ComponentFixture<InflightDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflightDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflightDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
