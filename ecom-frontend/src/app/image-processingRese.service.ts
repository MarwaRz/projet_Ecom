import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandelRese } from './_model/file-handelRese.model';
import { Reservation } from './_model/Reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ImageProcessingReseService {

  constructor(private sanitizer : DomSanitizer) { }

  public createImages(product: Reservation){
    const productImages: any[] = product.image;

    const productImagesToFileHandle: FileHandelRese[] = []; 

    for(let i=0; i<productImages.length; i++){
      const imageFileData = productImages[i];
      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type});

      const finalFileHandel : FileHandelRese = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };

      productImagesToFileHandle.push(finalFileHandel);
    }
    product.image = productImagesToFileHandle;
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
