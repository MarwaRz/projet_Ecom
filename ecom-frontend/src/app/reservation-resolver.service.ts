import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageProcessingReseService } from './image-processingRese.service';
import { Reservation } from './_model/Reservation.model';
import { ReservationService } from './_services/reservation.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationResolverService implements Resolve<Reservation[]>{

  constructor(private p: ReservationService, 
    private imageProcessingService: ImageProcessingReseService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Reservation[] | Observable<Reservation[]> | Promise<Reservation[]> {
    const id= route.paramMap.get("id");
    const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout")
    return this.p.getReservationDetails(isSingleProductCheckout, id)
    .pipe(
      map(
        (x: Reservation[], i)=> x.map((product : Reservation) => this.imageProcessingService.createImages(product))
      )
    );

  }
}
