import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_model/user.model';

@Component({
  selector: 'app-update-compte',
  templateUrl: './update-compte.component.html',
  styleUrls: ['./update-compte.component.css']
})
export class UpdateCompteComponent implements OnInit {
  user: User;
  Userpassword:String;
userName:String;
  profile: User ;
  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => this.user = user);

    this.userName= this.route.snapshot.params['userName'];

  



    if (this.userName) {
      this.userService.getProfile(this.userName).subscribe(
        data => {
          this.profile = data;
        },
        error => console.log(error)
      );
    } else {
      console.error('userName is undefined');
    }

  }

  onSubmit(){
    this.profile.userPassword=this.Userpassword;
    this.userService.updateProfile(this.userName, this.profile).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/cuenta']);
  }
}