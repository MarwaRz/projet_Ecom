import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { User } from '../_model/user.model';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
  Userpassword:String;
userName:String;
  profile: User ;
  user:User;
  constructor(private profileService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userName= this.route.snapshot.params['userName'];

    this.profileService.getCurrentUser().subscribe(user => this.user = user);




    if (this.userName) {
      this.profileService.getProfile(this.userName).subscribe(
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
    this.profileService.updatePassword(this.userName, this.profile).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/cuenta']);
  }
}