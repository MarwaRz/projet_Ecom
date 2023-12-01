import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../_services/profile.service';
import { Profile } from '../_model/profile.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  profiles: Profile[];

  constructor(private sanitizer: DomSanitizer , private router: Router, private profileService: ProfileService,) { }

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
