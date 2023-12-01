import { Product } from "./product.model";

export interface MyOrderDetails {
    orderId: number;
    orderFullName : string;
    orderFullOrder : string;
    orderContactNumber : string;
    orderAlternateContactNumber : string;
    orderStatus : string;
    orderAmount : number;
    ordersurface : number;
    orderintervention :number;
    prestation :String ;
    ordertotal : number;
orderEmploye:String;
    product : Product;
    user : any;
}




