import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TripItineraryService {
  private apiUrl = 'https://capstone-backend-xmv7.onrender.com/';
  //localhost:3000/trip-itineraries

  constructor(private http:HttpClient) { }

    // Method to create a trip itinerary
    createTripItinerary(data: any): Observable<any> {
      return this.http.post(`${this.apiUrl}trip-itineraries`, data);
    }
  
    // Method to get trip itinerary by ID
    getTripItinerary(id: string): Observable<any> {
      return this.http.get(`${this.apiUrl}trip-itineraries/${id}`);
    }
  
}
