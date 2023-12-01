import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../_services/comment.service';
import { Router } from '@angular/router';
import { format } from 'date-fns';
import { Comment } from '../_model/comment.model';
import { es } from 'date-fns/locale';
@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {
commentaire:Comment
date :String;
rate:number;

@Input() name: string;
rateId:number =0 ;
  dateAujourdhui:String;
   comment: Comment = {
    commentId:null,
    comment: "",
    date: "",
    time: "",
    rate:0,
    u: null,
}
  constructor(  private commentService: CommentService,
    private router: Router) { }
 

  ngOnInit(): void {

    this.dateAujourdhui = format(new Date(), ' dd MMMM yyyy HH:mm:ss', { locale: es });

   // this.dateAujourdhui = format(new Date(), ' dd MMMM yyyy HH:mm:ss'); // for example, "Thursday, 16 November 2023 15:30:00"
this.getAllCommentaire();
  }

  saveEmployee(){
    this.commentService.create(this.comment).subscribe( data =>{
      console.log(data);
    },
    error => console.log(error));
  }


 ratee(){
  this.comment.rate=this.rateId;
}
  
  onSubmit(){

    this.comment.date=this.dateAujourdhui;
    console.log(this.comment);
    this.saveEmployee();
    this.router.navigate(['']);
  }
  getAllCommentaire(){
    this.commentService.getList().subscribe(
      data => {
        this.commentaire= data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}
