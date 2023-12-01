import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { Commentaire } from '../_model/commentaire.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Blog } from '../_model/blog.model';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  blogId :number;

  dataSource = [];
  selectProductIndex = 0;
  blog :Blog;

  constructor(private activatedRoute: ActivatedRoute, private router : Router,
    private blogService: BlogService) { }

  ngOnInit(): void {




   this.blog = this.activatedRoute.snapshot.data['blog'];
  
   this.activatedRoute.paramMap.subscribe(params => {
     this.blogId = Number(params.get('blogId'));
     console.log("params",params);
     console.log("paramsid",this.blogId);
     
   });
  
    
     
  
  


    
  }







}
