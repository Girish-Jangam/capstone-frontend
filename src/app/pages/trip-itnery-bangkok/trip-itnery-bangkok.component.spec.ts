import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripItneryBangkokComponent } from './trip-itnery-bangkok.component';

describe('TripItneryBangkokComponent', () => {
  let component: TripItneryBangkokComponent;
  let fixture: ComponentFixture<TripItneryBangkokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripItneryBangkokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripItneryBangkokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
