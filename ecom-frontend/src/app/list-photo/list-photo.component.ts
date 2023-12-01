import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { ImageProcessingBlogService } from '../image-processingBlog.service';
import { BlogService } from '../_services/blog.service';
import { Blog } from '../_model/blog.model';

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.css']
})
export class ListPhotoComponent implements OnInit {
  
  showLoadMoreProductButton = false;
  showTable = false;
  pageNumber: number = 0;
  productDetails : Blog[] =[];
  displayedColumns: string[] = ['Id', 'Nombre del Blog', 'Descripción detallada' , 'Descripción general' ,'Fecha','Actions'];
  constructor(private productService: BlogService ,
    public imagesDialog: MatDialog,
    private imageProcessingService: ImageProcessingBlogService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProducts();




    
  }

  searchByKeyword(searchkeyword){

    this.pageNumber= 0;
    this.productDetails= [];
    this.getAllProducts(searchkeyword);

  }

  public getAllProducts(searchKey: string =""){
    this.showTable = false;
    this.productService.getAllBlog(this.pageNumber, searchKey)
    .pipe(
      map((x: Blog[], i) => x.map((product: Blog) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp: Blog[]) =>{
        console.log(resp);
        resp.forEach(product => this.productDetails.push(product));
        this.showTable=true;
        if(resp.length==2){
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

  loadMoreProduct(){
    this.pageNumber= this.pageNumber+1;
    this.getAllProducts();
  }

  deleteProduct(blogId){
    if (window.confirm('¿Estás seguro/a de que quieres eliminar este Proyecto?')) {

    this.productService.deleteBlog(blogId).subscribe(
      (resp)=> {
        this.getAllProducts();
      },
      (error: HttpErrorResponse) => {
        console.log(error);}
    );    }
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

  editProductDetails(blogId){
    this.router.navigate(['/agregar_proyecto', {blogId: blogId}])
  }

}
