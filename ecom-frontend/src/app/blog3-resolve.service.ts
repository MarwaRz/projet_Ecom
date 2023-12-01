import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageProcessingBlogService } from './image-processingBlog.service';
import { Blog3 } from './_model/blog3.model';
import { Blog3Service } from './_services/blog3.service';

@Injectable({
  providedIn: 'root'
})
export class Blog3ResolveService implements Resolve<Blog3>{

  constructor(private blogService: Blog3Service,
              private imageProcessingService: ImageProcessingBlogService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Blog3> {
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
        blogName:"",
        blogDescription:"",
        date:"",
        type:"",
        description:"",
    
        blogImages:[]
    };
  }
}
