import { Component, OnInit } from '@angular/core';
import { CommentService } from '../_services/comment.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-comment',
  templateUrl: './list-comment.component.html',
  styleUrls: ['./list-comment.component.css']
})
export class ListCommentComponent implements OnInit {
listComment:Comment[]=[]
commentId:number;
displayedColumns: string[] = ['Nombre de Usuario', 'Comentario', 'Fecha y Hora' ,'valoración de estrellas' ,'Acciones'];

  constructor(

private commentService : CommentService,private route: ActivatedRoute,  private router: Router 



  ) { }

  ngOnInit(): void {


    this.MyComment();
  }

  MyComment(){
    this.commentService.getList().subscribe(
      (resp: Comment[]) => {
        console.log(resp);
        this.listComment= resp;
      }, (err) => {
        console.log(err);
      }
    )
  }


  deleteComment(commentId){
    if (window.confirm('¿Estás seguro/a de que quieres eliminar este comentario?')) {

    this.commentService.deleteComment(commentId).subscribe(
      (resp)=> {
        this.MyComment();
      },
      (error: HttpErrorResponse) => {
        console.log(error);}
    );}    
  }

}
