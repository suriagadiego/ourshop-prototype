import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdbigComponent } from './adbig.component';

describe('AdbigComponent', () => {
  let component: AdbigComponent;
  let fixture: ComponentFixture<AdbigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdbigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdbigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
