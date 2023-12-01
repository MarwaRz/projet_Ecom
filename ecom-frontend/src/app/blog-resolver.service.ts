import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageProcessingBlogService } from './image-processingBlog.service';
import { Blog } from './_model/blog.model';
import { BlogService } from './_services/blog.service';

@Injectable({
  providedIn: 'root'
})
export class BlogResolverService implements Resolve<Blog[]>{

  constructor(private BlogService: BlogService, 
    private imageProcessingService: ImageProcessingBlogService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Blog[] | Observable<Blog[]> | Promise<Blog[]> {
    const id= route.paramMap.get("id");
    const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout")
    return this.BlogService.getBlogDetails(isSingleProductCheckout, id)
    .pipe(
      map(
        (x: Blog[], i)=> x.map((blog : Blog) => this.imageProcessingService.createImages(blog))
      )
    );

  }
}
