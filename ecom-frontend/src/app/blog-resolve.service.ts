import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageProcessingBlogService } from './image-processingBlog.service';
import { Blog } from './_model/blog.model';
import { BlogService } from './_services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogResolveService implements Resolve<Blog>{

  constructor(private blogService: BlogService,
              private imageProcessingService: ImageProcessingBlogService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blog> {
    const id=route.paramMap.get("blogId");

    if(id){
      return this.blogService.getBlogDetailsById(id)
              .pipe(
                map(p => this.imageProcessingService.createImages(p))
              );
    }else{
      return of(this.getBlogDetails());

    }

  }

  getBlogDetails(){
    return {
        blogId: null,
        blogName: "",
        blogDescription: "",
        date:"",
        type:"",
        description:"",
    
        blogImages:[]
    };
  }
}
