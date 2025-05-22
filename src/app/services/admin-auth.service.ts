import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private apiUrl = 'https://capstone-backend-xmv7.onrender.com/api/admin/login';  // Adjust API URL
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string) {
    
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      catchError(error => {
        throw error;
      })
    );
  }

  setCurrentUser(token: string) {
    localStorage.setItem('currentUser', JSON.stringify(token));
    this.currentUserSubject.next(token);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

  isAuthenticated() {
    return !!localStorage.getItem('currentUser');
  }
}
