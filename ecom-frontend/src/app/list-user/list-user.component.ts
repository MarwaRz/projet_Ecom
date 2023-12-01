import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { User } from '../_model/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Role } from '../_model/role.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  roles :any;
  detailsVisible = false;
user:User
  role:Role={
  roleName:"",
  roleDescription:""
};
roleId="Employe"
  productDetails : User[] =[];
  showLoadMoreProductButton = false;
  showTable = false;
  pageNumber: number = 0;
  displayedColumns: string[] = ['Nombre de Usuario', 'Número de Teléfono', 'Dirección' ,'Email','Rol','Actions'];
  
  constructor(private productService: UserService ,

    private router: Router) { }
  ngOnInit(): void {

    this.getAllUser();
    this.getAllRoles();

  }

 
  deleteUser(userName){
    if (window.confirm('¿Estás seguro/a de que quieres eliminar este Usuario?')) {

    this.productService.delete(userName).subscribe(
      (resp)=> {
        this.getAllUser();
        this.getAllRoles();
      },
      (error: HttpErrorResponse) => {
        console.log(error);}
    );}    
  }


 


  searchByKeyword(searchkeyword){

    this.pageNumber= 0;
    this.productDetails= [];
    this.getAllUser(searchkeyword);

  }


  showProductDetails(roleName:String) {
    this.router.navigate(['/lista_usuarios', roleName]);
  }





  getAllRoles(){
    this.productService.getAllRole().subscribe(
      data => {
        this.roles= data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  public getAllUser(searchKey: string =""){
    this.showTable = false;
    this.productService.getAllUser(this.pageNumber, searchKey)
   
    .subscribe(
      (resp: User[]) =>{
        console.log(resp);
        resp.forEach(product => this.productDetails.push(product));
        this.showTable=true;
        if(resp.length==100){
          this.showLoadMoreProductButton=true;
        }else{
          this.showLoadMoreProductButton=false;
        }
         this.productDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      } 

    );
  }



}




