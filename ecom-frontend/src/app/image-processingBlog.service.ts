import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandelBlog } from './_model/file-handelBlog.model';
import { Blog } from './_model/blog.model';
import { Blog3 } from './_model/blog3.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingBlogService {

  constructor(private sanitizer : DomSanitizer) { }

  public createImages(product: any){
    const productImages: any[] = product.blogImages;

    const productImagesToFileHandle: FileHandelBlog[] = [];

    for(let i=0; i<productImages.length; i++){
      const imageFileData = productImages[i];
      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type});

      const finalFileHandel : FileHandelBlog = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      productImagesToFileHandle.push(finalFileHandel);
    }
    product.blogImages = productImagesToFileHandle;
    return product;
  }






















  public dataURItoBlob(picBytes, imageType) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);

    for(let i=0; i<byteString.length; i++){
      int8Array[i] = byteString.charCodeAt(i);
    }

    const blob = new Blob([int8Array], { type: imageType});
    return blob;

  }

}
