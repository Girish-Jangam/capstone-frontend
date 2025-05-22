import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripItneryNewyorkComponent } from './trip-itnery-newyork.component';

describe('TripItneryNewyorkComponent', () => {
  let component: TripItneryNewyorkComponent;
  let fixture: ComponentFixture<TripItneryNewyorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripItneryNewyorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripItneryNewyorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
