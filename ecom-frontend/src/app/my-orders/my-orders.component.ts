import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { ReservationService } from '../_services/reservation.service';
import { ImageProcessingReseService } from '../image-processingRese.service';
import { Reservation } from '../_model/Reservation.model';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  displayedColumns: string[] = [ 'Nombre de Usuario', 'Dirección' ,'Número de Teléfono','Email' ,'Superficie' ,'Intervención',
  'Servicio','Total' ,'Fecha', 'Status','Actions'];

  myOrderDetails: Reservation[] =[];
  showTable: boolean;
  showLoadMoreProductButton: boolean;
  constructor(private productService : ReservationService,  public imagesDialog: MatDialog,
    private imageProcessingService: ImageProcessingReseService,) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

 h(){
    this.productService.getMyReservation().subscribe(
      (resp: Reservation[]) => {
        console.log(resp);
        this.myOrderDetails = resp;
      }, (err) => {
        console.log(err);
      }
    )
  }

public  getOrderDetails(){
    this.productService.getMyReservation()
    .pipe(
      map((x: Reservation[], i) => x.map((product: Reservation) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp:Reservation[]) =>{
        console.log(resp);
        resp.forEach(product => this.myOrderDetails.push(product));
        this.showTable=true;
        if(resp.length==2){
          this.showLoadMoreProductButton=true;
        }else{
          this.showLoadMoreProductButton=false;
        }
         this.myOrderDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }

    );
  }


  showImages(product: Reservation){
    console.log(product);
    this.imagesDialog.open(ShowProductImagesDialogComponent, {
      data: {
        images: product.image
      },
      height: '500px',
      width: '800px'
    });

  }


}
