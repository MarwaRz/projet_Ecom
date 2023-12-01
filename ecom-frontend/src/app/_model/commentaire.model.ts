import { Product } from "./product.model";

export interface Commentaire {
   commentaireId : number;
   commentaire : String;

    product : Product;
    user : any;
}