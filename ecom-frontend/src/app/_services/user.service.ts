import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { User } from '../_model/user.model';
import { Role } from '../_model/role.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  PATH_OF_API = 'http://localhost:9090';
  private baseUrl = 'http://localhost:9090/usernom';
  private baseUrl2 = 'http://localhost:9090/password';


  listData : User[];

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  constructor(
    private httpclient: HttpClient,
    private userAuthService: UserAuthService
  ) {}

  public register(registerData) {
    return this.httpclient.post(this.PATH_OF_API + '/registerNewUser', registerData);
  }

  public login(loginData) {
    return this.httpclient.post(this.PATH_OF_API + '/authenticate', loginData, {
      headers: this.requestHeader,
    });
  }


  public getAllUser(pageNumber, searchKeyword: string= ""){
    return this.httpclient.get<User[]>("http://localhost:9090/listUser?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  }


  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }
  public getAllUtilisateur() : Observable<User[]>{
    return this.httpclient.get<User[]>("http://localhost:9090/getAllUtilisateur");
   }

   public getCurrentUser(): Observable<User> {
    return this.httpclient.get<User>("http://localhost:9090/current");
   }

   public getAllRole() : Observable<Role[]>{
    return this.httpclient.get<Role[]>("http://localhost:9090/getAllrole");
   }


   public delete(userName :String){
    return this.httpclient.delete("http://localhost:9090/delete/"+userName);
   }
      
  getProfile(userName:any): Observable<any> {
    return this.httpclient.get(`${this.baseUrl}/${userName}`);
  }


  updatePassword(userName: any, value: any): Observable<Object> {
    return this.httpclient.put(`${this.baseUrl2}/${userName}`, value);
  }

  updateProfile(userName: any, value: any): Observable<Object> {
    return this.httpclient.put(`${this.baseUrl}/${userName}`, value);
  }

  // public getAllUserr(pageNumber, searchKeyword: string= "", roleName :String){
  //   return this.httpclient.get<User[]>("http://localhost:9090/listUserr?pageNumber="+pageNumber+"&searchKey="+searchKeyword+"&role="+roleName);
  // }
  // public getAllUserr(pageNumber, searchKeyword: string= "",roleName: String){
  //   return this.httpclient.get<User[]>("http://localhost:9090/listUserr?pageNumber="+pageNumber+"&searchKey="+searchKeyword);
  // }
  public getAllUserr(pageNumber: number, searchKeyword: string = "", roleName: String) {
    const url = `http://localhost:9090/listUserr?pageNumber=${pageNumber}&searchKey=${searchKeyword}&roleName=${roleName}`;
  
    return this.httpclient.get<User[]>(url);
  }
  


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }
  public addUser(addData) {
    return this.httpclient.post(this.PATH_OF_API + '/addUser' , addData);
  }


  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
}
