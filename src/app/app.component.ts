import { Ng2SocialAuthService } from 'projects/ng2-social-auth/src/public_api';
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
  }

  loginFacebook() {
    console.log('Facebook');
  }
}
