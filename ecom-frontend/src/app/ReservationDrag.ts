
import { Directive , HostBinding , HostListener , Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { FileHandelRese } from './_model/file-handelRese.model';

@Directive({
  selector: '[appDrag]'
})
export class ReservationDrag {


  @Output() files : EventEmitter<FileHandelRese> = new EventEmitter();

  @HostBinding("style.background") private background = "#eee";
  
  constructor(private sanitizer : DomSanitizer) { }

  @HostListener("dragover", ["$event"])
  public onDragOver(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    this.background ="#999";
  }

  @HostListener("dragleave", ["$event"])
  public onDragLeave(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    this.background ="#eee";
  }

  @HostListener("drop", ["$event"])
  public onDrop(evt: DragEvent){
    evt.preventDefault();
    evt.stopPropagation();
    this.background ="#eee";

    let fileHandleBlog: FileHandelRese = null;

    const file = evt.dataTransfer.files[0];

    const url = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file));
    let fileHandelBlog: FileHandelRese
    fileHandelBlog = {file, url};
    this.files.emit(fileHandelBlog);
  }

}
