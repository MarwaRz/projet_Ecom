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
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.css']
})
export class ListReservationComponent implements OnInit {
userName:String;
  showLoadMoreProductButton = false;
  showTable = false;
  pageNumber: number = 0;
  productDetails : Reservation[] =[];
  displayedColumns: string[] = ['Id', 'Nombre de Usuario', 'Dirección' ,'Número de Teléfono' ,'Email','Superficie' ,'Intervención',
  'Servicio' ,'Total' ,'Fecha',  'Status','Actions'];
  constructor(private productService: ReservationService ,
    public imagesDialog: MatDialog,
    private imageProcessingService: ImageProcessingReseService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();




    
  }

  searchByKeyword(searchkeyword){

    this.pageNumber= 0;
    this.productDetails= [];
    this.getAllProducts(searchkeyword);

  }

  public getAllProducts(searchKey: string =""){
    this.showTable = false;
    this.productService.getReservation(this.pageNumber, searchKey)
    .pipe(
      map((x: Reservation[], i) => x.map((product: Reservation) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp:Reservation[]) =>{
        console.log(resp);
        resp.forEach(product => this.productDetails.push(product));
        this.showTable=true;
       
         this.productDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }

    );
  }


  updateProfile(reservationId:any){
    this.router.navigate(['/actualizar_reserva',  reservationId]);
  }

  loadMoreProduct(){
    this.pageNumber= this.pageNumber+1;
    this.getAllProducts();
  }

  deleteProduct(reservationId){
    if (window.confirm('¿Estás seguro/a de que quieres eliminar este Reserva?')) {

    this.productService.deleteReservation(reservationId).subscribe(
      (resp)=> {
        this.getAllProducts();
      },
      (error: HttpErrorResponse) => {
        console.log(error);}
    );}    
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
