import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TripItineraryService } from '../../services/trip-itinerary.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.css']
})
export class CreateItineraryComponent implements OnInit {
  itineraryForm!: FormGroup;
   
  constructor( 
    private fb: FormBuilder, 
    private itineraryService: TripItineraryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initializeForm(); // Ensure form is initialized on component load
  }

  initializeForm() {
    this.itineraryForm = this.fb.group({
      // name : ['', Validators.required],
      destination: ['', Validators.required],
      duration: ['', Validators.required],
      activities: ['', Validators.required],
      lodging: ['', Validators.required],
      dining: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.itineraryForm.valid) {
      this.itineraryService.createTripItinerary(this.itineraryForm.value).subscribe(
        response => {
          alert(`Itinerary Created! Your ID is: ${response.id}`);
          this.itineraryForm.reset();
        },
        error => {
          alert('Error creating itinerary: ' + error.message);
        }
      );
    } else {
      alert('Please fill out all fields');
    }
  }

  viewItinerary() {
    this.router.navigate(['/viewItneray']);
  }
}
