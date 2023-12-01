import { Component, OnInit } from '@angular/core';
import { Profile } from '../_model/profile.model';
import { Observable } from 'rxjs';
import { ProfileService } from '../_services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: Profile[];
  displayedColumns: string[] = ['Nom', 'Email' ,'Adresse' ,'Contact' ,'Instagram', 'Facebook'
  ,'Youtube' ,'Prix Premium', 'Prix Standard', 'Prix Entreprise','Actions'];

  constructor(private profileService: ProfileService,private route: ActivatedRoute,  private router: Router ) { }

  ngOnInit(): void {
    this.reloadData();
  }
 
 
  updateProfile(id: number){
    this.router.navigate(['actualizar_prefil', id]);
  }
  reloadData(){
    this.profileService.getProfileList().subscribe(
      (resp: Profile[]) => {
        console.log(resp);
        this.profiles= resp;
      }, (err) => {
        console.log(err);
      }
    )
  }


 
  }




