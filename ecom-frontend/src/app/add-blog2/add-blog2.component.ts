import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { FileHandelBlog } from '../_model/file-handelBlog.model';
import { Blog3 } from '../_model/blog3.model';
import { Blog3Service } from '../_services/blog3.service';


@Component({
  selector: 'app-blog2',
  templateUrl: './add-blog2.component.html',
  styleUrls: ['./add-blog2.component.css']
})
export class AddBlog2Component implements OnInit {

  isNewProduct = true;
  blog: Blog3 = {
    blogId: null,
    blogName:"",
    blogDescription:"",
    date:"",
    type:"",
    description:"",

    blogImages:[]
  }



  constructor(private blogService: Blog3Service, 
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,private router: Router) { }

    ngOnInit(): void {
      
      this.blog = this.activatedRoute.snapshot.data['blog'];

      if(this.blog && this.blog.blogId){
        this.isNewProduct=false;
      }
    }

  addBlog(blogForm: NgForm){
    const blogFormData = this.prepareFormData(this.blog);
    this.blogService.addBlog(blogFormData).subscribe(
      (response: Blog3)=>{
       blogForm.reset();

        this.blog.blogImages = [];
        this.list();
      },
      (error: HttpErrorResponse)=>{
        console.log(error)

      }
      );
    
  }

  prepareFormData(blog: Blog3): FormData {
    const formData = new FormData();

    formData.append(
      'blog',
      new Blob([JSON.stringify(blog)], {type: 'application/json'})
    );

    for(var i=0; i<blog.blogImages.length; i++){
      formData.append(
        'imageFile',
        blog.blogImages[i].file,
        blog.blogImages[i].file.name
      );
    }

    return formData;
  } 

  onFileSelected(event: any){
    if(event.target.files){
      const file= event.target.files[0];
      const fileHandel: FileHandelBlog ={
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.blog.blogImages.push(fileHandel);
    }
  }

  removeImages(i: number){
    this.blog.blogImages.splice(i,1);
  }

  list(){
    this.router.navigate(['/lista_blog']);
  }

  fileDropped(fileHandel :FileHandelBlog) {
    this.blog.blogImages.push(fileHandel);
  }

}
