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
import { CommentaireInput } from '../_model/commentaireInput.model';
import { Commentaire } from '../_model/commentaire.model';

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent implements OnInit {
 /* myorder :Commentaire
  isSingleProductCheckout : string = "";
  productDetails : Product[]=[];
  orderDetails: CommentaireInput={
    commentaire : '',
	 

	  orderProductQuantityList : []

  }*/


  constructor(/* private activatedRoute: ActivatedRoute,
    private productService : ProductService,
    private router: Router*/) { }

  ngOnInit(): void {
    /*
    
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


  

 

  

  public placeOrder(orderForm : NgForm){
    this.productService.placeCommentaire(this.orderDetails, this.isSingleProductCheckout).subscribe(
      (resp) => {
        console.log(resp);
        orderForm.reset();
        this.router.navigate(["/login"])
      },
      (err) => {
        console.log(err);
      }
    );

  */
  }







 

}
