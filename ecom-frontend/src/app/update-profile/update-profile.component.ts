import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../_services/profile.service';
import { Profile } from '../_model/profile.model';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  id: number;
  profile: Profile ;
  constructor(private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.profileService.getProfile(this.id).subscribe(data => {
      this.profile= data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.profileService.updateProfile(this.id, this.profile).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/prefil']);
  }
}