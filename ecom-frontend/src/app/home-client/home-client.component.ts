import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { Product } from '../_model/product.model';
import { BlogService } from '../_services/blog.service';
import { ImageProcessingBlogService } from '../image-processingBlog.service';
import { Blog } from '../_model/blog.model';
import { ProductService } from '../_services/product.service';
import { Blog2Service } from '../_services/blog2.service';
import { Commentaire } from '../_model/commentaire.model';
import { ProfileService } from '../_services/profile.service';
import { Profile } from '../_model/profile.model';
import { CommentService } from '../_services/comment.service';
import { Blog3Service } from '../_services/blog3.service';
import { Blog3 } from '../_model/blog3.model';
import { TruncatePipe } from '../_services/truncate.pipe';
import { UserAuthService } from '../_services/user-auth.service';
@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.css']
})

export class HomeClientComponent implements OnInit  {

 
  profiles: Profile[];

  dataSource = [];
c : Commentaire;
commentaireId:number;
sdk :any
  pageNumber: number = 0;
  productDetails=[];
  blogDetails=[];
  blog_Details=[];
  commentaire=[];

  showLoadButton = false;
  constructor(    private userAuthService: UserAuthService, private activatedRoute: ActivatedRoute, private productService: ProductService,private blogService :BlogService,public crudApi: Blog2Service, 
    private imageProcessingService: ImageProcessingService, private imageProcessingBlogService: ImageProcessingBlogService,
    private router : Router , private profileService: ProfileService, private commentservice: CommentService,private blog_Service :Blog3Service) { }
  

  ngOnInit(): void {
    this.getAllBlog();
    this.getAllProducts();
    this.getAllBlogs();
  this.getData(); 
  this.getAllCommentaire() ;  
  this.c = this.activatedRoute.snapshot.data['c'];



   this.activatedRoute.paramMap.subscribe(params => {
    this.commentaireId = Number(params.get('commentaireId'));
    console.log("paramss",params);
    console.log("paramsidd",this.commentaireId);
    
  });  
    
  this.reloadData();
}

public isLoggedIn() {
  return this.userAuthService.isLoggedIn();
}

reloadData() {
  this.profileService.getProfileList().subscribe(data => {
    this.profiles = data;
  });
}

  searchByKeyword(searchkeyword){

    this.pageNumber= 0;
    this.productDetails= [];
    this.getAllProducts(searchkeyword);
    this.pageNumber= 0;
    this.blogDetails= [];
    this.getAllBlogs(searchkeyword);

  }


  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;}
     );
   
  }
  
  getAllCommentaire(){
    this.commentservice.getList().subscribe(
      data => {
        this.commentaire= data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }


  public getAllProducts(searchKey: string =""){
    this.productService.getAllProducts(this.pageNumber, searchKey)
    .pipe(
      map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp: Product[]) =>{
        console.log(resp);
        if(resp.length == 8){
          this.showLoadButton = true;
        }else{this.showLoadButton = false}
        resp.forEach(p => this.productDetails.push(p));
        // this.productDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }

    );
  }


  public getAllBlogs(searchKey: string =""){
    this.blogService.getAllBlog(this.pageNumber, searchKey)
    .pipe(
      map((x: Blog[], i) => x.map((blog:Blog) => this.imageProcessingBlogService.createImages(blog)))
    )
    .subscribe(
      (resp: Blog[]) =>{
        console.log(resp);
        if(resp.length == 8){
          this.showLoadButton = true;
        }else{this.showLoadButton = false}
        resp.forEach(p => this.blogDetails.push(p));
        // this.productDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }

    );
  }


  public loadMoreProduct(){

    this.pageNumber = this.pageNumber+1;
    this.getAllProducts();
  }

  showProductDetails(productId){
    this.router.navigate(['/detalles_servicio' , {productId: productId}]);

  }

  showProjet(blogId){
    this.router.navigate(['/detalles_proyecto' , {blogId: blogId}]);

  }


  showBlog(blogId){
    this.router.navigate(['/detalles_blog' , {blogId: blogId}]);

  }

  public getAllBlog(searchKey: string =""){
    this.blog_Service.getAllBlog(this.pageNumber, searchKey)
    .pipe(
      map((x: Blog3[], i) => x.map((blogs: Blog3) => this.imageProcessingBlogService.createImages(blogs)))
    )
    .subscribe(
      (resp: Blog3[]) =>{
        console.log(resp);
        if(resp.length == 8){
          this.showLoadButton = true;
        }else{this.showLoadButton = false}
        resp.forEach(p => this.blog_Details.push(p));
        // this.productDetails = resp;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      }

    );
  }
}
