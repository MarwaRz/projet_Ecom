import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { Product } from '../_model/product.model';
import { ImageProcessingService } from '../image-processing.service';
import { HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileService } from '../_services/profile.service';
import { Profile } from '../_model/profile.model';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  productDetails=[];
  pageNumber: number = 0;
  profiles: Profile[];

  showLoadButton = false;
  constructor( private productService: ProductService, private profileService: ProfileService,  private imageProcessingService: ImageProcessingService,  private router : Router) { }

  ngOnInit(): void {
    this.getAllProducts();
    this.reloadData();

  }


  reloadData() {
    this.profileService.getProfileList().subscribe(data => {
      this.profiles = data;
    });
  }

  public getAllProducts(searchKey: string =""){
    this.productService.getAllProducts(this.pageNumber, searchKey)
    .pipe(
      map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp: Product[]) =>{
        console.log(resp);
        if(resp.length == 6){
          this.showLoadButton = true;
        }else{this.showLoadButton = false}
        resp.forEach(p => this.productDetails.push(p));
        // this.productDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }

    );
  }







  showProductDetails(productId){
    this.router.navigate(['/detalles_servicio' , {productId: productId}]);

  }


}
