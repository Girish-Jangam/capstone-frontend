import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReviewService {
private apiUrl='https://capstone-backend-xmv7.onrender.com/reviews';
  constructor(private http:HttpClient) { }

  addReview(review: any):
    Observable<any>{
      return this.http.post(`${this.apiUrl}/add`,review);
    }

    getReviews(): Observable<any[]>{
      return this.http.get<any[]>(`${this.apiUrl}/all`);

    }
}
