import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEverythingComponent } from './shop-everything.component';

describe('ShopEverythingComponent', () => {
  let component: ShopEverythingComponent;
  let fixture: ComponentFixture<ShopEverythingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopEverythingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopEverythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
