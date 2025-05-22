import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripItneryParisComponent } from './trip-itnery-paris.component';

describe('TripItneryParisComponent', () => {
  let component: TripItneryParisComponent;
  let fixture: ComponentFixture<TripItneryParisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripItneryParisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripItneryParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
