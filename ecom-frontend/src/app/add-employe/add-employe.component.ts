import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.css']
})
export class AddEmployeComponent implements OnInit {

  constructor(private userService : UserService,
    private router : Router) { }

  ngOnInit(): void {
  }

  register(registerForm: NgForm){
    console.log(registerForm.value)
    this.userService.addUser(registerForm.value).subscribe(
      (response) => {
        this.router.navigate(['/lista_usuarios']);
      },
      (error) => {
        console.log(error);
      }
      );  

  }


}
