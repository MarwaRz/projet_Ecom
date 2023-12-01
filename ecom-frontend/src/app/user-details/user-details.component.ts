import { Component, OnInit } from '@angular/core';
import { User } from '../_model/user.model';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: User;

  constructor(private userService: UserService,private router: Router) {}

  ngOnInit(): void {
   this.userService.getCurrentUser().subscribe(user => this.user = user);
  }



  updateProfile(userName:  String){
    this.router.navigate(['actualizar_cuenta', userName]);
  }
  updateProfilePassword(userName:  String){
    this.router.navigate(['actualizar_contraseña', userName]);
  }
  
  deleteUser(userName:String){
    if (window.confirm('¿Estás seguro/a de que quieres eliminar este Cuenta?')) {

    this.userService.delete(userName).subscribe(
      (resp)=> {
        
      },
      (error: HttpErrorResponse) => {
        console.log(error);}
    );}    
  }

}
