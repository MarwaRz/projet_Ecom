import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../_services/profile.service';
import { Profile } from '../_model/profile.model';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  profiles: Profile[];

  constructor(private sanitizer: DomSanitizer ,private router: Router, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.profileService.getProfileList().subscribe(data => {
      this.profiles = data;
    });
  }
  getSafeMapsUrl(maps: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(maps);
  }
 
}
