import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comment } from '../_model/comment.model';

import { CommentService } from '../_services/comment.service';

@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent implements OnInit {
  @Input() name: string;
  rateId:number =0 ;
    date:String;  dateAujourdhui:String;


  commentId: number;
  comment:Comment;
  constructor(private profileService: CommentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.commentId = this.route.snapshot.params['commentId'];

    this.profileService.getComment(this.commentId).subscribe(data => {
      this.comment= data;
    }, error => console.log(error));
  }
  ratee(){
    this.comment.rate=this.rateId;
  }
  


 
    
  onSubmit(){
    this.profileService.update(this.commentId, this.comment).subscribe( data =>{
      this.goback();
    }
    , error => console.log(error));
  }

  goback(){
    this.router.navigate(['mi_comentario']);
  }
}