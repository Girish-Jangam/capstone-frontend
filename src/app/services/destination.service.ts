import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  private apiUrl = 'https://capstone-backend-xmv7.onrender.com/search';
  constructor(private http:HttpClient) { }
  
  searchDestinations(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?q=${query}`);
  }
}
