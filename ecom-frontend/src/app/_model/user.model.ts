import {Role} from "./role.model";


export interface User {
     userName:String
     userFirstName:String
    userLastName:String
    userEmail:String

     userPassword:String
     role:Role;


}