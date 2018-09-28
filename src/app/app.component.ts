import { Ng2SocialAuthService, ProviderType } from 'projects/ng2-social-auth/src/public_api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-social-auth';

  constructor(private socialAuthService: Ng2SocialAuthService) {}

  loginGoogle() {
    console.log('Google');
    this.socialAuthService.login(ProviderType.GOOGLE).subscribe((data) => {
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }

  loginFacebook() {
    console.log('Facebook');
    this.socialAuthService.login(ProviderType.FACEBOOK).subscribe((data) => {
      console.log(data);
    });
  }

  logOut() {
    this.socialAuthService.logout().subscribe();
  }
}
