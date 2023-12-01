import { Component, OnInit } from '@angular/core';
import { CommentService } from '../_services/comment.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mycomment',
  templateUrl: './mycomment.component.html',
  styleUrls: ['./mycomment.component.css']
})
export class MycommentComponent implements OnInit {
myComment:Comment[]=[]
commentId:number;
displayedColumns: string[] = ['Nombre de Usuario', 'Comentario', 'Fecha y Hora' ,'valoración de estrellas' ,'Acciones'];

  constructor(

private commentService : CommentService,private route: ActivatedRoute,  private router: Router 



  ) { }

  ngOnInit(): void {


    this.MyComment();
  }

  MyComment(){
    this.commentService.getMyComment().subscribe(
      (resp: Comment[]) => {
        console.log(resp);
        this.myComment= resp;
      }, (err) => {
        console.log(err);
      }
    )
  }

  updateComment(commentId: number){
    this.router.navigate(['actualizar_comentario', commentId]);
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
