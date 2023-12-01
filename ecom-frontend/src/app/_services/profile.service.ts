import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Profile} from '../_model/profile.model'
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = 'http://localhost:9090/profile';

  constructor(private http: HttpClient) { }

  getProfile(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }






  createProfile(profile: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, profile);
  }

  updateProfile(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

 

  getProfileList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}