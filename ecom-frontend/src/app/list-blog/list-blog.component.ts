import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ImageProcessingService } from '../image-processing.service';
import { ShowProductImagesDialogComponent } from '../show-product-images-dialog/show-product-images-dialog.component';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';
import { ImageProcessingBlogService } from '../image-processingBlog.service';
import { Blog3Service } from '../_services/blog3.service';
import { Blog3 } from '../_model/blog3.model';

@Component({
  selector: 'app-list-blog',
  templateUrl: './list-blog.component.html',
  styleUrls: ['./list-blog.component.css']
})
export class ListBlogComponent implements OnInit {

  showLoadMoreProductButton = false;
  showTable = false;
  pageNumber: number = 0;
  productDetails : Blog3[] =[];
  displayedColumns: string[] = ['Id', 'Nombre del Blog', 'Descripción detallada' , 'Descripción general' ,'Tipo','Fecha','Actions'];
  constructor(private productService: Blog3Service ,
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
      map((x: Blog3[], i) => x.map((product: Blog3) => this.imageProcessingService.createImages(product)))
    )
    .subscribe(
      (resp: Blog3[]) =>{
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
    if (window.confirm('¿Estás seguro/a de que quieres eliminar este Blog?')) {

    this.productService.deleteBlog(blogId).subscribe(
      (resp)=> {
        this.getAllProducts();
      },
      (error: HttpErrorResponse) => {
        console.log(error);}
    );    }
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

  editProductDetails(blogId){
    this.router.navigate(['/agregar_blog', {blogId: blogId}])
  }

}
