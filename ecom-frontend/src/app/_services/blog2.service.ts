import { Injectable } from '@angular/core';
import { HttpClient , HttpRequest, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule,Validators }
from '@angular/forms';
import { Blog2 } from '../_model/blog2.model';

@Injectable({
  providedIn: 'root'
})
export class Blog2Service {
  private baseUrl = 'http://localhost:9090/api/articles';
  host :string = "http://localhost:9090";
  choixmenu : string  = 'A';
  listData : Blog2[];
  public dataForm:  FormGroup; 
  constructor(private http: HttpClient) { }
 
  

  getData(Blog2Id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${Blog2Id}`);
  }
 
  createData(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}`, formData);
  }
  
  updatedata(Blog2Id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${Blog2Id}`, value);
  }
 
  deleteData(Blog2Id: number): Observable<any> {
   
    return this.http.delete(`${this.baseUrl}/${Blog2Id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
   
    return this.http.get(`${this.baseUrl}`);
  }


  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST',  '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }
}