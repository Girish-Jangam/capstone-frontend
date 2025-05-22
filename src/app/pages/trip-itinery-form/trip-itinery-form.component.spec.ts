import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripItineryFormComponent } from './trip-itinery-form.component';

describe('TripItineryFormComponent', () => {
  let component: TripItineryFormComponent;
  let fixture: ComponentFixture<TripItineryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripItineryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripItineryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
