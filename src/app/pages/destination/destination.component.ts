import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit{
  destinations: any[] = [];

  constructor(private favoritesService: FavoritesService, private route: Router, private tripService: TripService) { }

  ngOnInit(): void {
    this.getAllData();
  }
  
  getAllData():void{
    this.tripService.getDestination().subscribe(data => {
      this.destinations = data;
      console.log(this.destinations);
    })
  }

  toggleFavorite(destination: any) {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
    if (!isLoggedIn) {
      alert('You need to log in to add favorites!');
      this.route.navigate(['/login']);
      return;
    }
  
    if (this.favoritesService.isFavorite(destination.id)) {
      this.favoritesService.removeFromFavorites(destination.id);
      destination.favorite = false;
    } else {
      this.favoritesService.addToFavorites(destination);
      destination.favorite = true;
    }
  }

  addToFavorites(destination: any) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    favorites.push(destination);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Added to Favorites!');
  }

  isFavorite(destination: any): boolean {
    return this.favoritesService.isFavorite(destination.id);
  }

  onbali(name:number){
    const k ='/'+name;
     this.route.navigate([k]);
  }

  saveItinerary(destination: any) {
    let itineraries = JSON.parse(localStorage.getItem('itineraries') || '[]');
    itineraries.push(destination);
    localStorage.setItem('itineraries', JSON.stringify(itineraries));
    alert('Itinerary Saved!');
  }


onSaveItinerary(destination: any) {
  const itinerary = {
    Id:destination.id,
    name: destination.name,  // Destination name
    attractions: this.getAttractionsForDestination(destination.name),
    duration: this.getDurationForDestination(destination.name),
    dining: this.getDiningForDestination(destination.name),
    lodging: this.getLodgingForDestination(destination.name)
  };

  this.favoritesService.addItineraries(itinerary);

  alert(`${destination.name} itinerary saved!`);
}



getAttractionsForDestination(destinationName: string): string {
  const destination = this.destinations.find(dest => dest.name === destinationName);
  return destination ? destination.attractions : 'Attractions not available';
}

getDurationForDestination(destinationName: string): string {
  const destination = this.destinations.find(dest => dest.name === destinationName);
  return destination ? destination.duration : 'Duration not available';
}

getDiningForDestination(destinationName: string): string {
  const destination = this.destinations.find(dest => dest.name === destinationName);
  return destination ? destination.dining : 'Dining options not available';
}

getLodgingForDestination(destinationName: string): string {
  const destination = this.destinations.find(dest => dest.name === destinationName);
  return destination ? destination.lodging : 'Lodging options not available';
}
}
