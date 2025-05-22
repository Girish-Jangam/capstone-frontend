import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
   private loginUrl = "https://capstone-backend-xmv7.onrender.com/login"
   private regUrl = "https://capstone-backend-xmv7.onrender.com/register"
  constructor(private http :HttpClient) { 
  }
  register(data: any):Observable<any>{
    return this.http.post<any>(this.regUrl,data);
  }
  login(data:any): Observable<any> {
    return this.http.post<any>(this.loginUrl,data);
  }

  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }
}
