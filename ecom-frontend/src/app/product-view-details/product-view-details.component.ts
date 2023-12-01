import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { Commentaire } from '../_model/commentaire.model';
import { HttpErrorResponse } from '@angular/common/http';
import { UserAuthService } from '../_services/user-auth.service';

@Component({
  selector: 'app-product-view-details',
  templateUrl: './product-view-details.component.html',
  styleUrls: ['./product-view-details.component.css']
})
export class ProductViewDetailsComponent implements OnInit {
  productId :number;
  commentaireId :number;

  dataSource = [];
  commentaire: Commentaire[] =[];
  selectProductIndex = 0;
  product: Product;
c: Commentaire;

  constructor(private activatedRoute: ActivatedRoute, private router : Router,
    private productService: ProductService,private userAuthService: UserAuthService,) { }

  ngOnInit(): void {
    this.c = this.activatedRoute.snapshot.data['c'];



   this.activatedRoute.paramMap.subscribe(params => {
    this.commentaireId = Number(params.get('commentaireId'));
    console.log("paramss",params);
    console.log("paramsidd",this.commentaireId);
    
  });  

   this.product = this.activatedRoute.snapshot.data['product'];
  
   this.activatedRoute.paramMap.subscribe(params => {
     this.productId = Number(params.get('productId'));
     console.log("params",params);
     console.log("paramsid",this.productId);
     
   });
  
    
     
  
  


    
  }



  
  changeIndex(index){
    this.selectProductIndex=index;
  }

  

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }
 


  devis(){
    this.router.navigate(['/presupuesto']);
  }
  devisUser(){
    this.router.navigate(['/presupuesto_u']);
  }
}
