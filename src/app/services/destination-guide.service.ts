import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Destination } from "../../app/models/destination.mode";

@Injectable({
  providedIn: 'root'
})
export class DestinationGuideService {

  private apiUrl = 'https://capstone-backend-xmv7.onrender.com/getdestinations'
  constructor(private http: HttpClient){}

  getDestinations():Observable<Destination[]>{
    return this.http.get<Destination[]>(this.apiUrl)
  }

}
