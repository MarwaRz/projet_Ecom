import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';

import { ImageProcessingBlogService } from '../image-processingBlog.service';
import { Blog } from '../_model/blog.model';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { Blog3Service } from '../_services/blog3.service';
import { Blog3 } from '../_model/blog3.model';

@Component({
  selector: 'app-blog-home',
  templateUrl: './blog-home.component.html',
  styleUrls: ['./blog-home.component.css']
})
export class BlogHomeComponent implements OnInit {
sdk :any
blogDetails=[];
itemsToShow = 6; // Nombre d'éléments à afficher initialement
itemsToLoad = 6; // N
  pageNumber: number = 0;
  productDetails=[];
  showLoadButton = false;
  constructor(private blogService: Blog3Service,
    private imageProcessingBlogService: ImageProcessingBlogService,
    private router : Router,    public imagesDialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.getAllBlogs();
  }

 
  searchByKeyword(searchkeyword){

    this.pageNumber= 0;
    this.productDetails= [];
    this.getAllBlogs(searchkeyword);

  }

  public getAllBlogs(searchKey: string =""){
    this.blogService.getAllBlog(this.pageNumber, searchKey)
    .pipe(
      map((x: Blog3[], i) => x.map((blog:Blog3) => this.imageProcessingBlogService.createImages(blog)))
    )
    .subscribe(
      (resp: Blog3[]) =>{
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
    this.getAllBlogs();
  }
  showBlog(blogId){
    this.router.navigate(['/detalles_blog' , {blogId: blogId}]);

  }
 
  showImages(product: Blog3){
    console.log(product);
    this.imagesDialog.open(ShowProductImagesDialogComponent, {
      data: {
        images: product.blogImages
      },
      height: '500px',
      width: '800px'
    });

  }

  


}
