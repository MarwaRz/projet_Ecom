import { User } from "./user.model";

export interface Comment {
   commentId : number;
   comment : String;

    date:String;
    time:String
    rate:number;
    u : User;
}