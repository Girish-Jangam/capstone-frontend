import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TravelGroup } from '../models/travels.group'; // Import the interface

@Injectable({
  providedIn: 'root'
})
export class TravelGroupsService {
  private apiUrl = 'https://capstone-backend-xmv7.onrender.com/api/travelGroups';

  constructor(private http: HttpClient) {}


  private getAuthHeaders() {
    const token = localStorage.getItem('token'); 
    return new HttpHeaders().set('Authorization', token || '');
  }

  createGroup(groupData: any): Observable<TravelGroup> {  // Explicit type
    return this.http.post<TravelGroup>(`${this.apiUrl}/create`, groupData, {
      headers: this.getAuthHeaders()
    });
  }

  joinGroup(groupName: string): Observable<TravelGroup> {  // Explicit type
    return this.http.post<TravelGroup>(`${this.apiUrl}/join/${groupName}`, {}, {
      headers: this.getAuthHeaders()
    });
  }

  inviteUser(groupId: string, inviteeId: string): Observable<{ message: string; group: TravelGroup }> {
    return this.http.post<{ message: string; group: TravelGroup }>(`${this.apiUrl}/invite/${groupId}`, { inviteeId }, {
      headers: this.getAuthHeaders()
    });
  }

  acceptInvitation(groupId: string): Observable<{ message: string; group: TravelGroup }> {
    return this.http.post<{ message: string; group: TravelGroup }>(`${this.apiUrl}/accept-invite/${groupId}`, {}, {
      // headers: this.getAuthHeaders()
    });
  }

  sendMessage(groupName: string, sender:string, text: string): Observable<any> {

    return this.http.post(`${this.apiUrl}/groups/${groupName}/message`, {sender,text},{headers:this.getAuthHeaders()});
  }

  getAllGroups(): Observable<TravelGroup[]> {
    return this.http.get<TravelGroup[]>(`${this.apiUrl}/view/all`, {
      headers: this.getAuthHeaders()
    });
  }

  getGroupByName(groupName:string):Observable<any>{
    return this.http.get(`${this.apiUrl}/groups/${groupName}`,{headers:this.getAuthHeaders()});
  }
  
  }

