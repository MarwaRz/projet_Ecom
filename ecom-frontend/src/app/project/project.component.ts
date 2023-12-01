import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { BlogService } from '../_services/blog.service';
import { ImageProcessingBlogService } from '../image-processingBlog.service';
import { Blog } from '../_model/blog.model';
import { MatDialog } from '@angular/material/dialog';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
sdk :any
blogDetails=[];
itemsToShow = 6; // Nombre d'éléments à afficher initialement
itemsToLoad = 6; // N
  pageNumber: number = 0;
  productDetails=[];
  showLoadButton = false;
  constructor(private blogService: BlogService,
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
    this.getAllBlogs();
  }

 
  showImages(product: Blog){
    console.log(product);
    this.imagesDialog.open(ShowProductImagesDialogComponent, {
      data: {
        images: product.blogImages
      },
      height: '500px',
      width: '800px'
    });

  }

  showProjet(blogId){
    this.router.navigate(['/detalles_proyecto' , {blogId: blogId}]);

  }

/**
* Sending a message in the chat room.
*/
}
