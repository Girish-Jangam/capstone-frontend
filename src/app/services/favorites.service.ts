import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private bookGuideFavorites: any[] = [];
  private itineraries: any[] = [];

  constructor() {
    this.loadFavorites();
  }

  addToFavorites(destination: any) {
    if (!this.isFavorite(destination)) {
      this.bookGuideFavorites.push(destination);
      this.saveFavorites();
    }
  }

  removeFromFavorites(destinationId: any) {
    this.bookGuideFavorites = this.bookGuideFavorites.filter(dest => dest.id !== destinationId);
    this.saveFavorites();
  }

  removeFromFavorite(itineraryId: any) {
    this.itineraries = this.itineraries.filter(i => i.id !== itineraryId);
    this.saveFavorites();
  }

  // removeFromFavorite(itineraryId: any) {
  //   this.itineraries = this.itineraries.filter(i => i.id !== itineraryId);
  //   this.saveFavorites();  // Save updated list to localStorage
  // }

  isFavorite(destination: any): boolean {
    return this.bookGuideFavorites.some(dest => dest.id === destination.id);
  }

  getFavorites(): any[] {
    return this.bookGuideFavorites;
  }

  addItinerary(itinerary: any) {
    // Ensure we add a complete itinerary
    if (itinerary && itinerary.destination && itinerary.activities) {
      this.itineraries.push(itinerary);
      this.saveFavorites();
    }
  }

  addItineraries(itinerary: any) {
    // Ensure we add a complete itinerary
   
      this.itineraries.push(itinerary);
      this.saveFavorites();
  }

  getItineraries() {
    return this.itineraries;
  }

  private saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.bookGuideFavorites));
    localStorage.setItem('itineraries', JSON.stringify(this.itineraries));
  }

  private loadFavorites() {
    const storedFavorites = localStorage.getItem('favorites');
    this.bookGuideFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    const storedItineraries = localStorage.getItem('itineraries');
    this.itineraries = storedItineraries ? JSON.parse(storedItineraries) : [];
  }
}
