import { FileHandelRese } from "./file-handelRese.model";
import { User } from "./user.model";

export interface Reservation  {
 
 reservationId:number;
     reservationName:String;
     nom:String;
     contact:String;
     adresse:String;
     date:String;
    email:String;

    surface :number;
     intervention:number;

    prestation:number;
     total:number;
     status:String;

   image: FileHandelRese[]
   u:any;









   






}


