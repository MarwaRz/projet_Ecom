import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetails } from '../_model/order-details.model';
import { Product } from '../_model/product.model';
import {MyOrderDetails} from '../_model/order.model';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductService } from '../_services/product.service';
import { UserService } from '../_services/user.service';
import { User } from '../_model/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
 
  showTable = false;

  myorder :MyOrderDetails
  isSingleProductCheckout : string = "";
  productDetails : Product[]=[];
  orderDetails: OrderDetails={
    fullName : '',
	  fullAddress: '',
	  contactNumber : '',
	  alternateContactNumber : '',
    surface:0,
    prestation:0,
    intervention:0,
    total:0,
    employe:'',

	  orderProductQuantityList : []

  }

  public employeId: String = "";

  public surfaceId: number = 0;
  public interventionId: number = 0;
  public prestationId: number = 0;
  public somme: number = 0;



  constructor( private activatedRoute: ActivatedRoute,
    private productService : ProductService,  public userservice : UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userservice.getAllUtilisateur().subscribe(
      response =>{this.userservice.listData = response;}
     );
    
    this.productDetails= this.activatedRoute.snapshot.data['productDetails'];

    this.isSingleProductCheckout = this.activatedRoute.snapshot.paramMap.get("isSingleProductCheckout");
    this.productDetails.forEach(
      x => this.orderDetails.orderProductQuantityList.push(
        {productId: x.productId, quantity: 1
        }
      )
    );
    console.log(this.productDetails);
    
    console.log(this.orderDetails);
  }


  

  getData() {
    this.userservice.getAllUtilisateur().subscribe(
      response =>{this.userservice.listData = response;}
     );
   
  }

  
  public calculateSum() {
    this.somme = this.surfaceId + this.interventionId + this.prestationId*500;
    this.orderDetails.surface =this.somme;
    this.orderDetails.prestation =this.prestationId;
    this.orderDetails.intervention =this.interventionId;


    this.orderDetails.total =this.somme;
    



  }
  onSelectionChange() {
    this.orderDetails.employe =this.employeId;

    console.log('EmployeId sélectionné :', this.employeId);

    // Vous pouvez faire d'autres opérations ici avec la valeur sélectionnée.
  }
  
  
  
  
  
  
  public placeOrder(orderForm : NgForm){
    this.productService.placeOrder(this.orderDetails, this.isSingleProductCheckout).subscribe(
      (resp) => {
        console.log(resp);
        orderForm.reset();
        this.router.navigate(["/orderConfirm"])
      },
      (err) => {
        console.log(err);
      }
    );

  }






 

}
