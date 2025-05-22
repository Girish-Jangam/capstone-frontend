import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-itinery-form',
  templateUrl: './trip-itinery-form.component.html',
  styleUrls: ['./trip-itinery-form.component.css']
})
export class TripItineryFormComponent {
  itinerary : FormGroup;

  constructor(private fb: FormBuilder){
    this.itinerary = this.fb.group({
      destination: ['',Validators.required],
      startDate : ['', [Validators.required, this.startDateValidator]],
      endDate : ['', [Validators.required, this.endDateValidator]],
      duration : ['',[Validators.required]],
      activities: ['', Validators.required],
      Lodging : ['', Validators.required],
      dining : ['', Validators.required]
    });
  };
  startDateValidator(control: AbstractControl): ValidationErrors | null {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(control.value);
    return selectedDate >= today ? null : {startDateInvalid:true};
  }

  endDateValidator: ValidatorFn = (control : AbstractControl): ValidationErrors | null => {
    const formGroup = control.parent;
    if(formGroup){
      const startDate = formGroup.get('startDate')?.value;
      const endDate = control.value;
      if(startDate && endDate){
        const start = new Date(startDate);
        const end = new Date(endDate);
        if(end < start){
          return {endDateInvalid : true};
        }
      }
    }
    return null;
  }

  submitForm(){
    console.log('Itinerary Submitted:', this.itinerary);
    alert('Trip Itinerary Submitted Successfully!') 
  }
}
