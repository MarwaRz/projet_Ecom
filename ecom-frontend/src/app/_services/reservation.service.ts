import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Reservation } from '../_model/Reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseUrl = 'http://localhost:9090/p';

  constructor(private httpClient: HttpClient) { }

 
  public getMyReservation() : Observable<Reservation[]>{
    return this.httpClient.get<Reservation[]>("http://localhost:9090/getReservationUser");
   }

  public addReservation(reservation: FormData){
    return this.httpClient.post<Reservation>("http://localhost:9090/addReservation", reservation);
  }
  public addReservationLogin(reservation: FormData){
    return this.httpClient.post<Reservation>("http://localhost:9090/getReservationUser", reservation);
  }


  public getReservation(pageNumber, searchKeyword: string= ""){
    return this.httpClient.get<Reservation[]>("http://localhost:9090/getAllReservation?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }

  public getReservationsById(reservationId:any){
    return this.httpClient.get<Reservation>("http://localhost:9090/getReservationById/"+reservationId);
   }
 
      
  getProfile(reservationId:any): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${reservationId}`);
  }



   updateProfile(reservationId: any, value: any): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${reservationId}`, value);
  }



  public deleteReservation(reservationId: number){
   return this.httpClient.delete("http://localhost:9090/deleteReservation/"+reservationId);
  }
  public getReservationDetails(isSingeProductCheckout,resrvationId){
    return this.httpClient.get<Reservation[]>("http://localhost:9090/getReservationDetails/"+isSingeProductCheckout+"/"+resrvationId);
   }

   

  


   
}
