import { OrderQuantity } from "./order-quantity.model";

export interface OrderDetails {

      fullName : String;
	  fullAddress: String;
	  contactNumber : String;
	  alternateContactNumber : String;
	  orderProductQuantityList : OrderQuantity[];
	  surface:Number;
	  intervention :Number;
	  prestation :number ;
	  total:number;
	  employe:String;

	  
	
}