import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Blog } from '../_model/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }



 

  public addBlog(blog: FormData){
    return this.httpClient.post<Blog>("http://localhost:9090/addNewBlog", blog);
  }


  public getAllBlog(pageNumber, searchKeyword: string= ""){
    return this.httpClient.get<Blog[]>("http://localhost:9090/getAllBlog?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }

  public getBlogDetailsById(blogId){
    return this.httpClient.get<Blog>("http://localhost:9090/getBlogById/"+blogId);
   }

  public deleteBlog(blogId: number){
   return this.httpClient.delete("http://localhost:9090/deleteBlogDetails/"+blogId);
  }

  public getBlogDetails(isSingeProductCheckout,blogId){
    return this.httpClient.get<Blog[]>("http://localhost:9090/getBlogDetails/"+isSingeProductCheckout+"/"+blogId);
   }


   


}
