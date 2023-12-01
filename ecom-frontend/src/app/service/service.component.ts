import { Component, Input, OnInit } from '@angular/core';
import { CommentService } from '../_services/comment.service';
import { Router } from '@angular/router';
import { Comment } from '../_model/comment.model';
import { format } from 'date-fns';
import { StarRatingModule } from 'angular-star-rating';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  @Input() name: string;
rateId:number =1 ;
  date:String;  dateAujourdhui:String;
   comment: Comment = {
    commentId: 1,
    comment: "",
    date: "",
    time: "",
    rate:0,
    u: null,
}
  constructor(private commentService: CommentService,
    private router: Router) { }
  ngOnInit(): void {
    this.dateAujourdhui = format(new Date(), ' dd MMMM yyyy HH:mm:ss'); // for example, "Thursday, 16 November 2023 15:30:00"

  }
    

  saveEmployee(){
    this.commentService.create(this.comment).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/']);
  }
 rate(){
  this.comment.rate=this.rateId;
}
  
  onSubmit(){

    this.comment.date=this.dateAujourdhui;
    console.log(this.comment);
    this.saveEmployee();
  }
}
