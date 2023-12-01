import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Role } from '../_model/role.model';
import { User } from '../_model/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
  role: Role;
roleName:String;
user: User[] =[];
productDetails : any[] =[];
showLoadMoreProductButton = false;
showTable = false;
pageNumber: number = 0;
x:any;
id:number;
displayedColumns: string[] = ['Nombre de Usuario', 'Número de Teléfono', 'Dirección' ,'Email','Rol'];

  constructor(private activatedRoute: ActivatedRoute, private router : Router,
    private productService: UserService) { }

  ngOnInit(): void {


    this.role = this.activatedRoute.snapshot.data['role'];
    console.log("role:", this.role);

  
   this.activatedRoute.paramMap.subscribe(params => {
     this.roleName = (params.get('roleName'));

     console.log("paramsname",this.roleName);
    
     
   });
   this.getAllUser();

  }


 
  list() {
    this.router.navigate(['/lista_usuarios']);
  }





  searchByKeyword(searchkeyword){

    this.pageNumber= 0;
    this.productDetails= [];
    this.getAllUser(searchkeyword );

  }



  public getAllUser(searchKey: string = "") {
    this.showTable = false;
    
    
    console.log(this.roleName);

      
    this.productService.getAllUserr(this.pageNumber, searchKey,this.roleName)
      .subscribe(
        (resp: User[]) => {
          resp.forEach(product => this.productDetails.push(product));
          this.showTable = true;
          if (resp.length == 2) {
            this.showLoadMoreProductButton = true;
          } else {
            this.showLoadMoreProductButton = false;
          }
          console.log(this.productDetails);
          
          
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }
  


}
