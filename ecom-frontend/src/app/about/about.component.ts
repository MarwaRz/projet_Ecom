import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Role } from '../_model/role.model';
import { User } from '../_model/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  product: Role;
roleName:String;
user: User[] =[];
productDetails : User[] =[];
showLoadMoreProductButton = false;
showTable = false;
pageNumber: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router : Router,
    private productService: UserService) { }

  ngOnInit(): void {


   
  }


 



}