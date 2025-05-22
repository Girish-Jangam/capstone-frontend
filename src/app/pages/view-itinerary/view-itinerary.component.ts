import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TripItineraryService } from '../../services/trip-itinerary.service';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view-itinerary',
  templateUrl: './view-itinerary.component.html',
  styleUrls: ['./view-itinerary.component.css']
})
export class ViewItineraryComponent { 
  itineraryForm: FormGroup;
  itinerary: any;
  message: string = '';

  constructor(private fb: FormBuilder, private itineraryService: TripItineraryService, private favoritesService:FavoritesService,private router:Router) {
    // Initialize the form group for the trip ID input
    this.itineraryForm = this.fb.group({
      tripId: ['']
    });
  }

  // Method to get the itinerary based on the trip ID
  getItinerary() {
    const tripId = this.itineraryForm.get('tripId')?.value;
    if (tripId) {
      this.itineraryService.getTripItinerary(tripId).subscribe(
        data => {
          this.itinerary = data;
        },
        error => {
          alert('Error fetching itinerary: ' + error.message);
        }
      );
    }
  }

  saveToFavorites() {
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem('isLoggedIn');

    if (userLoggedIn === 'true') {
      // Ensure itinerary data is populated
      if (this.itinerary && this.itinerary.destination && this.itinerary.activities.length > 0) {
        this.favoritesService.addItinerary(this.itinerary); // Save itinerary to favorites
        alert('Itinerary saved to favorites!');
      } else {
        alert('Itinerary details are missing or incomplete.');
      }
    } else {
      // Display a message if the user is not logged in and redirect to login
      this.message = 'You need to log in to save this itinerary.';
      setTimeout(() => {
        this.router.navigate(['/login']); // Redirect to login page after showing the message
      }, 2000); // Delay to show message
    }
  }
}
