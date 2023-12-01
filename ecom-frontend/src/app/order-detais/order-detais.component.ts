import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_services/product.service';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { MyOrderDetails } from '../_model/order.model';
import { Product } from '../_model/product.model';
import { OrderDetails } from '../_model/order-details.model';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-detais',
  templateUrl: './order-detais.component.html',
  styleUrls: ['./order-detais.component.css']
})
export class OrderDetaisComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Product Name', 'Name', 'Address', 'Contact No' , 'Contact Noo','Total','Status'];
  dataSource = [];
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

  constructor(private productService : ProductService ,   public userservice : UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllOrderDetailsForAdmin();
    this.userservice.getAllUtilisateur().subscribe(
      response =>{this.userservice.listData = response;}
     );
  }

  getAllOrderDetailsForAdmin(){
    this.productService.getAllOrderDetailsForAdmin().subscribe(
      (resp) => {
        console.log(resp);
        this.dataSource = resp;
      }, (error) => {
        console.log(error);
      }
    );
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
  onSelectionChange() {
    this.orderDetails.employe =this.employeId;

    console.log('EmployeId sélectionné :', this.employeId);

    // Vous pouvez faire d'autres opérations ici avec la valeur sélectionnée.
  }

}
