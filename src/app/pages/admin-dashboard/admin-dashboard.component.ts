import { Component, OnInit } from '@angular/core';
import { AdminDashboardService } from '../../services/admin-dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  itineraries: any[] = [];
  destinations: any[] = [];
  errorMessage: string | null = null;

  // For creating new itinerary
  newItinerary = {
    id: '',
    destination: '',
    duration: '',
    activities: [],
    lodging: '',
    dining: '',
  };

  // For creating new destination
  newDestination = {
    id: '',
    title: '',
    summary: '',
    images: ''
  };

  // For editing an itinerary
  editItinerary = { ...this.newItinerary };

  // For editing a destination
  editDestination = { ...this.newDestination };

  constructor(
    private adminDashboardService: AdminDashboardService,
    private router: Router
  ) {}

  ngOnInit() {
    this.fetchItineraries();
    this.fetchDestinations();
  }

  // Fetch all itineraries
  fetchItineraries() {
    this.adminDashboardService.getAllItineraries().subscribe(
      (data) => {
        this.itineraries = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching itineraries';
      }
    );
  }

  // Fetch all destinations
  fetchDestinations() {
    this.adminDashboardService.getAllDestinations().subscribe(
      (data) => {
        this.destinations = data;
      },
      (error) => {
        this.errorMessage = 'Error fetching destinations';
      }
    );
  }

  // Create a new itinerary
  createItinerary() {
    this.adminDashboardService.createItinerary(this.newItinerary).subscribe(
      (data) => {
        this.itineraries.push(data); // Add the newly created itinerary to the list
        this.resetItineraryForm(); // Reset form
      },
      (error) => {
        this.errorMessage = 'Error creating itinerary';
      }
    );
  }

  // Create a new destination
  createDestination() {
    this.adminDashboardService.createDestination(this.newDestination).subscribe(
      (data) => {
        this.destinations.push(data); // Add the newly created destination to the list
        this.resetDestinationForm(); // Reset form
      },
      (error) => {
        this.errorMessage = 'Error creating destination';
      }
    );
  }

  // Delete an itinerary
  deleteItinerary(id: string) {
    this.adminDashboardService.deleteItinerary(id).subscribe(
      () => {
        this.itineraries = this.itineraries.filter((itinerary) => itinerary.id !== id);
      },
      (error) => {
        this.errorMessage = 'Error deleting itinerary';
      }
    );
  }

  // Delete a destination
  deleteDestination(id: string) {
    this.adminDashboardService.deleteDestination(id).subscribe(
      () => {
        this.destinations = this.destinations.filter((destination) => destination.id !== id);
      },
      (error) => {
        this.errorMessage = 'Error deleting destination';
      }
    );
  }

  // Edit an itinerary
  editItineraryDetails(itinerary: any) {
    this.editItinerary = { ...itinerary }; // Set the edit form to the selected itinerary details
  }

  // Edit a destination
  editDestinationDetails(destination: any) {
    this.editDestination = { ...destination }; // Set the edit form to the selected destination details
  }

  // Save updated itinerary
  saveUpdatedItinerary() {
    this.adminDashboardService.updateItinerary(this.editItinerary.id, this.editItinerary).subscribe(
      (updatedItinerary) => {
        const index = this.itineraries.findIndex((itinerary) => itinerary.id === updatedItinerary.id);
        if (index !== -1) {
          this.itineraries[index] = updatedItinerary; // Replace old itinerary with updated one
        }
        this.editItinerary = { ...this.newItinerary }; // Reset the edit form
      },
      (error) => {
        this.errorMessage = 'Error updating itinerary';
      }
    );
  }

  // Save updated destination
  saveUpdatedDestination() {
    this.adminDashboardService.updateDestination(this.editDestination.id, this.editDestination).subscribe(
      (updatedDestination) => {
        const index = this.destinations.findIndex((destination) => destination.id === updatedDestination.id);
        if (index !== -1) {
          this.destinations[index] = updatedDestination; // Replace old destination with updated one
        }
        this.editDestination = { ...this.newDestination }; // Reset the edit form
      },
      (error) => {
        this.errorMessage = 'Error updating destination';
      }
    );
  }

  // Reset the new itinerary form
  resetItineraryForm() {
    this.newItinerary = {
      id: '',
      destination: '',
      duration: '',
      activities: [],
      lodging: '',
      dining: '',
    };
  }

  // Reset the new destination form
  resetDestinationForm() {
    this.newDestination = {
      id: '',
      title: '',
      summary: '',
      images: '',
    };
  }

  // Logout (assuming the service provides a logout method)
  onLogout() {
    this.router.navigate(['/login']); // Redirect to login page
  }
}
