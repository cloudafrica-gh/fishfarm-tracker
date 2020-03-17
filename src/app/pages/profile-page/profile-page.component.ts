import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  public userProfile: any;
  public isLoading = true;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.userProfile = localStorage.getItem('profile');
    console.log('user profile: ', JSON.parse(this.userProfile));
    this.getUserProfile();
  }

  getUserProfile() {
    this.authService.getUserProfile()
      .subscribe( res => {
        this.userProfile = res;
        this.isLoading = false;

        console.log(`ProfileController: ${this.userProfile}`);
      },
      error => {
        console.log(`ProfileController: Error ==> ${error}`);
      });
  }

}
