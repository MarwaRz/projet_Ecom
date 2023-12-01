import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {Blog3 } from '../_model/blog3.model';

@Injectable({
  providedIn: 'root'
})
export class Blog3Service {

  constructor(private httpClient: HttpClient) { }



 

  public addBlog(blog: FormData){
    return this.httpClient.post<Blog3>("http://localhost:9090/add", blog);
  }


  public getAllBlog(pageNumber, searchKeyword: string= ""){
    return this.httpClient.get<Blog3[]>("http://localhost:9090/getAll?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }

  public getBlogDetailsById(blogId){
    return this.httpClient.get<Blog3>("http://localhost:9090/getById/"+blogId);
   }

  public deleteBlog(blogId: number){
   return this.httpClient.delete("http://localhost:9090/deleteDetails/"+blogId);
  }

  public getBlogDetails(isSingeProductCheckout,blogId){
    return this.httpClient.get<Blog3[]>("http://localhost:9090/getDetails/"+isSingeProductCheckout+"/"+blogId);
   }


   


}
