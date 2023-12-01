import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { Reservation } from '../_model/Reservation.model';
import { ReservationService } from '../_services/reservation.service';
import { FileHandelRese } from '../_model/file-handelRese.model';
import { ProfileService } from '../_services/profile.service';
import { Profile } from '../_model/profile.model';


@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.css']
})
export class DevisComponent implements OnInit {
  isNewProduct = true;
  profiles: Profile[];
  blogForm: FormGroup;

  dateField: string;
  dateFieldInvalid: boolean = false;
  blog: Reservation = {
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
    total:null,
    status:"not done",

  image:[],
  u:null,

  }

  public surfaceId: number = 0;
  public interventionId: number = 0;
  public prestationId: number = 0;



  constructor(private blogService: ReservationService, private profileService: ProfileService, 
    private sanitizer: DomSanitizer,
    private activatedRoute: ActivatedRoute ,private router: Router,private fb: FormBuilder) {
      this.blogForm = this.fb.group({
        date: [null, [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/), this.validateDate.bind(this)]],
        // other form controls...
      });
     }

    ngOnInit(): void {

  
    this.reloadData();
   
    }


    
    onDateInput(event: any): void {
      // Adjust the input value to the desired format (YYYY-MM-DD)
      const inputValue = event.target.value;
      const formattedDate = this.formatDateInput(inputValue);
      this.blogForm.controls['date'].setValue(formattedDate);
    }
  
    formatDateInput(inputValue: string): string {
      // Adjust the input value to the desired format (YYYY-MM-DD)
      // Add your custom logic for formatting the date input
      return inputValue;
    }
    validateDate(control: any): { [key: string]: boolean } | null {
      const selectedDate = new Date(control.value);
      const currentDate = new Date();
      const tomorrow = new Date(currentDate);
      tomorrow.setDate(currentDate.getDate() + 1);
  
      if (isNaN(selectedDate.getTime())) {
        return { 'invalidDate': true };
      }
  
      if (selectedDate < tomorrow) {
        return { 'minDate': true };
      }
  
      return null;
    }


    reloadData() {
      this.profileService.getProfileList().subscribe(data => {
        this.profiles = data;
      });
    }
    
  addBlog(blogForm: NgForm){
    const blogFormData = this.prepareFormData(this.blog);
    this.blogService.addReservation(blogFormData).subscribe(
      (response: Reservation)=>{
       blogForm.reset();

        this.blog.image = [];
        this.confirmation();
      },
      (error: HttpErrorResponse)=>{
        console.log(error)

      }
      );
    
    }
  public calculateSum() {
    this.blog.surface =this.surfaceId;
    this.blog.prestation =this.prestationId;
    this.blog.intervention =this.interventionId;


    



  }

  prepareFormData(blog: Reservation): FormData {
    const formData = new FormData();

    formData.append(
      'blog',
      new Blob([JSON.stringify(blog)], {type: 'application/json'})
    );

    for(var i=0; i<blog.image.length; i++){
      formData.append(
        'imageFile',
        blog.image[i].file,
        blog.image[i].file.name
      );
    }

    return formData;
  } 


  confirmation(){
    this.router.navigate(['/confirmación']);
  }

  onFileSelected(event: any){
    if(event.target.files){
      const file= event.target.files[0];
      const fileHandel: FileHandelRese ={
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        ),
      };
      this.blog.image.push(fileHandel);
    }
  }

  removeImages(i: number){
    this.blog.image.splice(i,1);
  }

  fileDropped(fileHandel :FileHandelRese) {
    this.blog.image.push(fileHandel);
  }

}
