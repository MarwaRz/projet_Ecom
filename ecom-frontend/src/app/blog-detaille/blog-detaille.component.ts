import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog3Service } from '../_services/blog3.service';
import { Blog3 } from '../_model/blog3.model';

@Component({
  selector: 'app-blog-detaille',
  templateUrl: './blog-detaille.component.html',
  styleUrls: ['./blog-detaille.component.css']
})
export class BlogDetailleComponent implements OnInit {

  blogId :number;

  dataSource = [];
  selectProductIndex = 0;
  blog :Blog3;

  constructor(private activatedRoute: ActivatedRoute, private router : Router,
    private blogService: Blog3Service) { }
  ngOnInit(): void {


    this.blog = this.activatedRoute.snapshot.data['blog'];
  
    this.activatedRoute.paramMap.subscribe(params => {
      this.blogId = Number(params.get('blogId'));
      console.log("params",params);
      console.log("paramsid",this.blogId);
      
    });
   
  }

}
