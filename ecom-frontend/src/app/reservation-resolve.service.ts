import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Reservation } from './_model/Reservation.model';
import { ReservationService } from './_services/reservation.service';
import { ImageProcessingReseService } from './image-processingRese.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationResolveService implements Resolve<Reservation>{
  constructor(private blogService: ReservationService,
              private imageProcessingService: ImageProcessingReseService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Reservation> {
    const id =route.paramMap.get("reservationId");

    if(id){
      return this.blogService.getReservationsById(id)
              .pipe(
                map(p => this.imageProcessingService.createImages(p))
              );
    }else{
      return of(this.getReservationDetails());

    }

  }

  getReservationDetails(){
    return {
        reservationId:null,
     reservationName:"",
     nom:"",
    email:"",
     contact:"",
     adresse:"",

     date:"",
    surface :0,
     intervention:0,

    prestation:0,
     total:0,
     status:"not done",

   image:[],
   u:null,


    };
  }
}
