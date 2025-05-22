// src/app/services/admin-dashboard.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminDashboardService {
  private apiUrl = 'https://capstone-backend-xmv7.onrender.com/api'; // Adjust this URL based on your backend server

  constructor(private http: HttpClient) {}

  // Get all trip itineraries
  getAllItineraries(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/trip-itineraries`);
  }

  // Get all destinations
  getAllDestinations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/destinations`);
  }

  // Create a new trip itinerary
  createItinerary(itineraryData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/trip-itineraries/create`, itineraryData);
  }

  // Create a new destination
  createDestination(destinationData: any): Observable<any> {
    console.log("hello");
    
    return this.http.post<any>(`${this.apiUrl}/destinations/create`, destinationData);
  }

  // Update itinerary
  updateItinerary(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/trip-itineraries/${id}`, data);
  }

  // Delete itinerary
  deleteItinerary(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/trip-itineraries/${id}`);
  }

  // Update destination
  updateDestination(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/destinations/${id}`, data);
  }

  // Delete destination
  deleteDestination(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/destinations/${id}`);
  }
}
