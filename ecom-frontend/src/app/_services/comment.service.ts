import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Profile} from '../_model/profile.model'
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = 'http://localhost:9090/comment';

  constructor(private http: HttpClient) { }

  getComment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }



  public getMyComment() : Observable<Comment[]>{
    return this.http.get<Comment[]>("http://localhost:9090/getCommentUser");
   }
   public deleteComment(commentId: number){
    return this.http.delete("http://localhost:9090/deleteComment/"+commentId);
   }

  create(comment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, comment);
  }

  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

 

  getList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}