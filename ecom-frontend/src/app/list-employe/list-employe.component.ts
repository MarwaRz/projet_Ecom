import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { User } from '../_model/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Role } from '../_model/role.model';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-list-employe',
  templateUrl: './list-employe.component.html',
  styleUrls: ['./list-employe.component.css']
})
export class ListEmployeComponent implements OnInit {
  
  items: User[];
  constructor(private    userr :UserService,    private httpclient: HttpClient,


    private router: Router) { }
  ngOnInit(): void {this.userr.getAllUtilisateur().subscribe(data => {
    this.items = data;
  });  

  }















}




