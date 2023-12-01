import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
import { ProfileService } from '../_services/profile.service';
import { Profile } from '../_model/profile.model';
import { User } from '../_model/user.model';

@Component({
  selector: 'app-headerr',
  templateUrl: './headerr.component.html',
  styleUrls: ['./headerr.component.css'],
})
export class HeaderrComponent implements OnInit {
  profiles: Profile[];
  detailsVisible = false;
user:User;
  constructor(
    private userAuthService: UserAuthService,
    private router: Router, private profileService: ProfileService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
   /* this.userService.getCurrentUser().subscribe(user => this.user = user);*/


this.reloadData();  }
  reloadData() {
    this.profileService.getProfileList().subscribe(data => {
      this.profiles = data;
    });
  }
  public isLoggedIn() {

    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/login']);
  }

  public isAdmin(){
    return this.userAuthService.isAdmin();
  }

  public isUser(){
    return this.userAuthService.isUser();
  }
  public isEmploye(){
    return this.userAuthService.isEmploye();
  }

  Compte(){
    this.router.navigate(['cuenta']);
  }

  showUserDetails() {
    this.userService.getCurrentUser().subscribe(
      (user: User) => {
        // Mettez à jour les détails de l'utilisateur
        this.user = user;
        // Affichez les détails de l'utilisateur en mettant à jour detailsVisible
        this.detailsVisible = true;
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur', error);
        // Gérez les erreurs selon vos besoins
      }
    );
  }

}
