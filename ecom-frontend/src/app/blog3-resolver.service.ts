
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageProcessingBlogService } from './image-processingBlog.service';
import { Blog3 } from './_model/blog3.model';
import { Blog3Service } from './_services/blog3.service';

@Injectable({
  providedIn: 'root'
})
export class Blog3ResolverService implements Resolve<Blog3[]>{

  constructor(private BlogService: Blog3Service, 
    private imageProcessingService: ImageProcessingBlogService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Blog3[] | Observable<Blog3[]> | Promise<Blog3[]> {
    const id= route.paramMap.get("id");
    const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout")
    return this.BlogService.getBlogDetails(isSingleProductCheckout, id)
    .pipe(
      map(
        (x: Blog3[], i)=> x.map((blog : Blog3) => this.imageProcessingService.createImages(blog))
      )
    );

  }
}
