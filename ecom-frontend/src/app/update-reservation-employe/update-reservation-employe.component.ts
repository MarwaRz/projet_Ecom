import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from '../_services/reservation.service';
import { Reservation } from '../_model/Reservation.model';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../_model/user.model';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-update-reservation-employe',
  templateUrl: './update-reservation-employe.component.html',
  styleUrls: ['./update-reservation-employe.component.css']
})
export class UpdateReservationEmployeComponent implements OnInit {
  dateAujourdhui : string;

  reservationId:any;
  user: User[];
u : any;
reservation: Reservation = {
  reservationId:null,
  reservationName:"",
  nom:"",
  contact:"",
  adresse:"",

  date:"",
  email:"",

 surface :0,
  intervention:0,

 prestation:0,
  total:0,
  status:"not done",

image:[],
u:null,

}

  
  constructor(private profileService: ReservationService, private  userr :UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.dateAujourdhui = new Date().toLocaleDateString();


    this.userr.getAllUtilisateur().subscribe(data => {
      this.user = data;
    });

    this.reservationId = this.activatedRoute.snapshot.params['id'];

    this.profileService.getProfile(this.reservationId).subscribe(data => {
      this.reservation= data;
    }, error => console.log(error));
      
  
    this.profileService.getProfile(this.reservationId).subscribe(
      data => {
        this.reservation = data;
      },
      error => console.log(error)
    );
    }
  
  
 

 





  onSubmit(){

    this.profileService.updateProfile(this.reservationId, this.reservation).subscribe( data =>{
      this.router.navigate(['/lista_reservas']);
    }
    , error => console.log(error));


  }






}
