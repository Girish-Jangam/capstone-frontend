import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripItneryComponent } from './trip-itnery.component';

describe('TripItneryComponent', () => {
  let component: TripItneryComponent;
  let fixture: ComponentFixture<TripItneryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripItneryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripItneryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
